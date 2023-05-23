import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { SimpleDialogComponent } from '../../components/simple-dialog/simple-dialog.component';
import { SimpleFormComponent } from '../../components/simple-form/simple-form.component';
import { ProductsService } from 'src/app/services/products.service';
import { List } from 'src/app/components/model/list';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

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
@ViewChild(SimpleFormComponent) simpleFormComponent: SimpleFormComponent = new SimpleFormComponent();
  fullList:List= new List();
  fullList2:List= new List();
  name:string="";
  description:string="";
  price:number=0;
  state:boolean=false;
  idtegory:string="";
  title1:string="Lista de productos";
  title2:string="Totales comprados";

  constructor(private service:ProductsService, private dialog: MatDialog, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.list();
  }

  openDialogNew(): void {
    
    this.dialog.open(SimpleFormComponent, {width: '400px'});
  }

  list(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      const nombre = params['name'];
      //const id = this.route.snapshot.params['id'];
      //const nombre = this.route.snapshot.params['nombre'];
      //const id = this.route.snapshot.queryParams['id'];
//const nombre = this.route.snapshot.queryParams['nombre'];
      console.log(`ID: ${id}, Nombre: ${nombre}`);
    });
    this.service.get(0).subscribe(data => {
      this.fullList=data
      //console.log(data);
    },error => {
      console.log(error);
    });;
  }
  save(){
    console.log("");
  }
}
