import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { List } from '../model/list';
import { RowComponent } from '../row/row.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @ViewChild(RowComponent) RowComponent: RowComponent = new RowComponent();
  @Input() list:List=new List();
  @Input() title:string="";
  headers:any[]=[];
  products:any[]=[];

  ischeck:boolean=false;

  ngAfterViewInit() {
    console.log(this.RowComponent.msj);
  }


  hello(){
    this.RowComponent.disableBtn(this.ischeck);
  }
  
  
  ngOnInit(): void {

    this.headers=this.list.titles;
    this.products=this.list.products;

  }

  getStyle(row:number){
    if((row%2)==0){
      return "row1";
    }else{
      return "row0";
    }
  }

}
