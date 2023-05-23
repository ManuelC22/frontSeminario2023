import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ProductComponent } from './pages/product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RowComponent } from './components/row/row.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonCellComponent } from './components/button-cell/button-cell.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { SimpleDialogComponent } from './components/simple-dialog/simple-dialog.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { PrincipalMenuComponent } from './components/principal-menu/principal-menu.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { ListProductsComponent } from './components/list-products/list-products.component';
import {MatPaginatorModule,MatPaginatorIntl} from '@angular/material/paginator';
import { ProductPaginatorComponent } from './paginator/product-paginator/product-paginator.component';
import { NumberAcountPipe } from './pipes/number-acount.pipe';
import { ImageNotFoundDirective } from './directives/image-not-found.directive';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProductComponent,
    RowComponent,
    TableComponent,
    ButtonCellComponent,
    SimpleDialogComponent,
    SimpleFormComponent,
    PrincipalMenuComponent,
    ListProductsComponent,
    ProductPaginatorComponent,
    NumberAcountPipe,
    ImageNotFoundDirective,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatButtonToggleModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: ProductPaginatorComponent}],
  bootstrap: [AppComponent]
})
export class AppModule { }
