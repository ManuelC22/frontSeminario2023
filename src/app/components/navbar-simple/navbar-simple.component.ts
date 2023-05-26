import { Component, OnInit,ViewChild } from '@angular/core';
import { ButtonSimpleComponent } from '../../components/button-simple/button-simple.component';

@Component({
  selector: 'app-navbar-simple',
  templateUrl: './navbar-simple.component.html',
  styleUrls: ['./navbar-simple.component.css']
})
export class NavbarSimpleComponent implements OnInit {

  @ViewChild('tercero',{}) btnsegundoHijo: ButtonSimpleComponent = new ButtonSimpleComponent();
  edited:boolean=false;
  constructor() { }

  ngOnInit(): void {
    
  }



  cambiarHijos(edited:boolean){
    this.edited=edited;
  }

}
