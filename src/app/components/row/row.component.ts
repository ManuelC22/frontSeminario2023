import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {


@Input() rowIdex:number=0;
@Input() prod:Product=new Product();

msj:string="Hola Mundo y gente de IAS Software!";
rowColor:object={
  'color': '#E74C3C'
};
  constructor() { }

  ngOnInit(): void {
  }

  onChildButtonClick(nameBtn: string ){
    alert(`El Boton ${nameBtn} fue activado`);
  }

  disableBtn(onChange:boolean){
    if(onChange){
      alert("La fila Fue activada");
    }
    
  }



}
