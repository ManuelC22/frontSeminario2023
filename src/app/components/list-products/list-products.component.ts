import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { List } from '../model/list';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  length = 30;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [3, 5];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent= new PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getData(e.pageIndex);
    
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private service:ProductsService) { }
  //moneda:string='€';
  pais:string='COP';
  moneda:string='$';
  typeTemplate:string='full';
  products:List= new List();
  ngOnInit(): void {
    this.getData(0);
  }

  getData(pageIndex:number){
    this.service.get(pageIndex).subscribe(data => {
      console.log(data);
      let aux=[data[pageIndex]]
      this.products.products=aux;
    },error => {
      console.log(error);
    });
  }
}
