import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-pizza',
  templateUrl: './editar-pizza.component.html',
  styleUrls: ['./editar-pizza.component.css']
})
export class EditarPizzaComponent {
  pizzaEditando: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const pizzaId = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3001/api/pizzas/${pizzaId}`).subscribe((pizza: any) => {
      this.pizzaEditando = pizza;
    });
  }

  editarPizza() {
    this.http.put(`http://localhost:3001/api/pizzas/${this.pizzaEditando._id}`, this.pizzaEditando).subscribe(() => {
      this.router.navigate(['/pizzas']);
    });
  }
}
