import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { EditarPizzaComponent } from './editar-pizza/editar-pizza.component';

const routes: Routes = [
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pizzas', component: PizzasComponent },
  { path: 'editar-pizza/:id', component: EditarPizzaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
