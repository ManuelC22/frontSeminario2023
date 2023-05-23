import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

name:string="";

categories:any[]=[
  {id:'001',name:'Articulos de salud'},
  {id:'004',name:'Articulos de Botanica'},
  {id:'0051',name:'Articulos de Tecnologia'},
  {id:'671',name:'Articulos de viveres'},
  {id:'886',name:'Articulos de Ropa'},
  {id:'133',name:'Articulos de Calzado'},
  {id:'14434',name:'Articulos de Belleza'}
]

  ngOnInit(): void {
  }

}
