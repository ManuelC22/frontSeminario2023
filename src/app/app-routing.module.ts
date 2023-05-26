import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../app/pages/product/product.component';
import { ListProductsComponent } from '../app/components/list-products/list-products.component';
import { ErrorComponent } from '../app/components/error/error.component';
import { SimpleFormComponent } from '../app/components/simple-form/simple-form.component';
import { LoginGuard } from '../app/guards/login.guard';

const routes: Routes = [
 /* { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'productos', component: ProductComponent,children:[
    { path: 'agregar', component: SimpleFormComponent },
    { path: 'listar', component: ListProductsComponent }
  ] },
  { path: 'lista', component: ListProductsComponent,canActivate: [LoginGuard] },
  { path: 'error', component: ErrorComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
