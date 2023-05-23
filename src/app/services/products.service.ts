import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../components/model/product';
import { List } from '../components/model/list';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  endpoint:string="http://localhost:3000";
  operation="";
  nameS="ProductsService";


  save(product:Product): Observable<any>{

    return this.http.post<any>(`${this.endpoint}/save`,product).pipe(
      map(response => response)
    );
  }

  get(index:number): Observable<any>{
    return this.http.get<any>(`${this.endpoint}/list`).pipe(
      map(response => response)
    );
  }
}
