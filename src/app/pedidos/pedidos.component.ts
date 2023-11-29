import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  orders: any[] = [];
  mensagemSucesso: string = '';

  constructor(private http: HttpClient) {
    this.carregarPedidos();
  }

  carregarPedidos() {
    this.http.get<any[]>('http://localhost:3001/api/orders').subscribe((orders) => {
      this.orders = orders;
    });
  }

  alterarStatusPedido(order: any) {
    let novoStatus = '';

    if(order.status === 'Confirmando') {
      novoStatus = 'Preparando';
    } else if(order.status === 'Preparando') {
      novoStatus = 'Pronto';
    }

    const updatedOrder = { ...order, status: novoStatus };

    this.http.put(`http://localhost:3001/api/orders/${order._id}`, updatedOrder).subscribe(() => {
      this.carregarPedidos();
      this.mensagemSucesso = 'Status do pedido alterado com sucesso!';
    });
  }
}
