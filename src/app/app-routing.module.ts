import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: 'products', component: ProductsComponent},
  { path: 'orders', component: MyOrdersComponent},
  { path: 'admin/orders', component: AdminOrdersComponent},
  { path: 'admin/products', component: AdminProductsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'login', component: LoginComponent},
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
