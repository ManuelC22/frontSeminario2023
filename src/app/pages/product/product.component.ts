import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../components/model/product';
import { List } from 'src/app/components/model/list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

categories:any[]=[
  {id:'001',name:'Articulos de salud'},
  {id:'004',name:'Articulos de Botanica'},
  {id:'0051',name:'Articulos de Tecnologia'},
  {id:'671',name:'Articulos de viveres'},
  {id:'886',name:'Articulos de Ropa'},
  {id:'133',name:'Articulos de Calzado'},
  {id:'14434',name:'Articulos de Belleza'}
];

  fullList:List= new List();
  fullList2:List= new List();
  name:string="";
  description:string="";
  price:number=0;
  state:boolean=false;
  idtegory:string="";
  title1:string="Lista de productos";
  title2:string="Totales comprados";

  constructor(private service:ProductsService) { }
  ngOnInit(): void {
    this.list();
  }

  list(){
    this.fullList=this.service.get("3");
    this.fullList2.titles=["Candidad","valor","Totales"]
  }
  save(){
    console.log("");
  }
}
