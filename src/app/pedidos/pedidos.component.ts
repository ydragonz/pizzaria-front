// pedidos.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  orders: any[] = [];
  mensagemSucesso: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3001/api/orders').subscribe((data: any[]) => {
      this.orders = data;
    });
  }

  alterarStatusPedido(order: any) {
    order.status = 'Pronto';
    this.http.put(`http://localhost:3001/api/orders/${order._id}`, order).subscribe(() => {
      this.mensagemSucesso = 'Status do pedido alterado com sucesso!';
    });
  }
}
