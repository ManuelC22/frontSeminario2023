import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../components/model/product';
import { List } from '../components/model/list';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  endpoint:string=`api/`;
  operation="";
  nameS="ProductsService";


  save(product:Product):boolean{

    this.http.post(`${this.endpoint}`,product).subscribe(data => {
      console.log(data);
      return true;
    },error => {
      console.log(error);
      return false;
    });
    return false;
  }

  get(id:string):List{
    let list = new List();
    let aux:Product[]=[];
    for(let j = 0; j<=10;j++){
      list.titles=["Identificación","Nombre","descripción","Precio"];
      let pro:Product= new Product();
      pro.name="Teclado";
      pro.description="sdfsdfsdfsdfsdfe";
      pro.id="001";
      pro.state=true;
      pro.price=50000;
  
/*      let pro2:Product= new Product();
      pro2.name="Pantalla";
      pro2.description="sdfsdfsdfsdf";
      pro2.id="323";
      pro2.price=60000;*/
  
      aux[j]=pro;
    }
    list.products=aux;
    return list;
  }

}
