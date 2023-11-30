import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs'; 

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit, OnDestroy {
  orders: any[] = [];
  mensagemSucesso: string = '';
  private pollingSubscription: Subscription = new Subscription(); 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarPedidos();
    this.startPolling();
  }

  ngOnDestroy() {
    this.pollingSubscription.unsubscribe(); 
  }

  carregarPedidos() {
    this.http.get<any[]>('http://localhost:3001/api/orders').subscribe((orders) => {
      this.orders = orders;
      this.scheduleMessageClear();
    });
  }

  alterarStatusPedido(order: any) {
    let novoStatus = '';

    if (order.status === 'Confirmando') {
      novoStatus = 'Preparando';
    } else if (order.status === 'Preparando') {
      novoStatus = 'Pronto';
    }

    const updatedOrder = { ...order, status: novoStatus };

    this.http.put(`http://localhost:3001/api/orders/${order._id}`, updatedOrder).subscribe(() => {
      this.carregarPedidos();
      this.mensagemSucesso = 'Status do pedido alterado com sucesso!';
    });
  }

  startPolling() {
    this.pollingSubscription = interval(5000).subscribe(() => {
      this.carregarPedidos();
    });
  }

  scheduleMessageClear() {
    setTimeout(() => {
      this.mensagemSucesso = '';
    }, 3000);
  }
}
