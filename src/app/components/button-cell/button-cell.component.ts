import { Component,EventEmitter, OnInit,Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-button-cell',
  templateUrl: './button-cell.component.html',
  styleUrls: ['./button-cell.component.css']
})
export class ButtonCellComponent implements OnInit {

  constructor() { }
  @Input() label:string="";
  @Input() typebtn:string="primary";
  @Input() action:string="delete";
  @Output() eventClick:EventEmitter<string> = new EventEmitter();

  styleLight = {
    'font-size': '15px',
    'color': 'white',
    'background-color': '#ABB2B9'
  };

  styleDark = {
    'font-size': '15px',
    'color': 'white',
    'background-color': '#2C3E50'
  };

  ngOnInit(): void {
  }

  onClickBtn(){
    this.eventClick.emit(`${this.label} de la celda`);
  }

  getStyle(row:number){
    if((row%2)==0){
      return this.styleDark;
    }else{
      return this.styleLight;
    }
  }

}
