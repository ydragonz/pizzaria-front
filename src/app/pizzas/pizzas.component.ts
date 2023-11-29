import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  pizzas: any[] = [];
  novaPizza = { name: '', description: '', price: null };
  mensagemSucesso: string = '';

  constructor(private http: HttpClient) {
    this.carregarPizzas();
  }

  carregarPizzas() {
    this.http.get<any[]>('http://localhost:3001/api/pizzas').subscribe((pizzas) => {
      this.pizzas = pizzas;
    });
  }

  adicionarPizza() {
    this.http.post<any>('http://localhost:3001/api/pizzas', this.novaPizza).subscribe(() => {
      this.carregarPizzas();
      this.mensagemSucesso = 'Pizza cadastrada com sucesso!';
    });
  }

  removerPizza(pizza: any) {
    this.http.delete(`http://localhost:3001/api/pizzas/${pizza._id}`).subscribe(() => {
      this.carregarPizzas();
      this.mensagemSucesso = 'Pizza removida com sucesso!';
    });
  }
}
