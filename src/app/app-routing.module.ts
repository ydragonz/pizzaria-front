import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pizzas', component: PizzasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
