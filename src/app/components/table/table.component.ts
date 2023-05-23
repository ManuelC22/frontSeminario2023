import { Component, Input, OnInit } from '@angular/core';
import { List } from '../model/list';
import { Product } from '../model/product';
import {MatDialog} from '@angular/material/dialog';
import { SimpleDialogComponent } from '../simple-dialog/simple-dialog.component';
import { CardComponent } from '../card/card.component';
import { SimpleFormComponent } from '../simple-form/simple-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  headers: string[]=[];
  products : Product[] = [];

  
  @Input() list:List=new List();
  @Input() title:string="";
  primary:string="primary";
  accent:string="accent";
  ischeck:boolean=false;
  constructor(private dialog: MatDialog) {}
  ngAfterViewInit() {
    //console.log(this.RowComponent.msj);
  }

  ngOnInit(): void {
    this.headers = this.list.titles;
    this.products= this.list.products;
    console.log(this.products);
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SimpleDialogComponent, {width: '250px'});
  }

  openDialogEdit(): void {
    this.dialog.open(SimpleFormComponent, {width: '400px'});
  }

  


  getStyle(row:number){
    if((row%2)==0){
      return "row1";
    }else{
      return "row0";
    }
  }

}
