import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-simple',
  templateUrl: './button-simple.component.html',
  styleUrls: ['./button-simple.component.css']
})
export class ButtonSimpleComponent implements OnInit {

  constructor() { }
  @Input() typebtn:string="primary";
  @Input() action:string="delete";
  @Input() label:string="Borrar";
  @Output() eventClick:EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }

  onClickBtn(){
    this.eventClick.emit(`${this.label} de la celda`);
  }

}
