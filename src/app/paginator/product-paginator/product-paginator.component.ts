import { Component,Injectable } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-product-paginator',
  templateUrl: './product-paginator.component.html',
  styleUrls: ['./product-paginator.component.css']
})

@Injectable()
export class ProductPaginatorComponent implements MatPaginatorIntl {

  constructor() { 
  }

  changes = new Subject<void>();
  firstPageLabel = `Primera pagina`;
  itemsPerPageLabel = `Productos por pagina:`;
  lastPageLabel = `Ultima pagina`;
  nextPageLabel = 'Siguiente pagina';
  previousPageLabel = 'anterior Pagina';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Página 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  }

}
