import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../components/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  endpoint:string="https://young-sands-07814.herokuapp.com/api/products";
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

  get(id:string){
    /*
    this.http.get(`${this.endpoint}`).subscribe(data => {
      console.log(data);
      //Object.keys(data).map(key => [key, data[key]]);
      

    },error => {
      console.log(error);
    });*/

    let products:any[]=[{name:"Teclado",id:"001",precio:"50000",description:"sdfsdfsdfsdfsdfe"},{name:"Pantalla",id:"323",precio:"60000",description:"sdfsdfsdfsdf"}];
    return products;

  }

}
