import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../model/product';

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

products:any[]=[];

  name:string="";
  description:string="";
  price:number=0;
  state:boolean=false;
  idtegory:string="";

  constructor(private service:ProductsService) { }
  ngOnInit(): void {

    this.products=this.service.get("");
  }

  save(){
    let pod:Product={name:this.name,description:this.description,price:this.price,state:this.state,idtegory:this.idtegory};
    let res=this.service.save(pod);
    if(res){
      alert("producto Guardado con exito");
    }else{
      alert("Error al guardar el producto");
    }
  }

  list(){
    this.service.get("3");
  }

getcontrato(){
  let employeName="Juan Gomez";
  let employeId="1212332";
let address="springfield, Calle simpre viva # 1";  
let year =88;
console.log(`Entre las partes, por un lado ${employeName}, domiciliado en la ciudad de ${address}, representante legal de ${employeName}, 
con NIT (${employeId}) (en caso que el empleador sea una persona jurídica), quien en adelante y para los efectos del presente contrato se denomina como EL EMPLEADOR, y por el otro, (nombre completo del trabajador), domiciliado en la ciudad de 
(lugar actual de domicilio), quien en adelante y para los ${this.price} efectos del presente contrato se denomina como EL TRABAJADOR, ambos mayores de edad (las partes deben ser mayores de ${year} años; especialmente el trabajador, salvo que se trate de un menor de edad con permiso de trabajo expedido por el Inspector del Trabajo), identificados como aparece al pie de las firmas, hemos acordado suscribir este contrato de trabajo, el cual se regirá por las siguientes cláusulas:
//Artículo 1. Naturaleza y Objeto. ${{name:22,id:22}} Se trata de un contrato de trabajo a término fijo, en vigencia del cual el EMPLEADOR contrata al TRABAJADOR para que este de forma personal, dirija su capacidad de trabajo en aras de la prestación de servicios y desempeño de las actividades propias del cargo de (denominación del cargo), y como contraprestación el EMPLEADOR pagará una remuneración. `);
}


}
