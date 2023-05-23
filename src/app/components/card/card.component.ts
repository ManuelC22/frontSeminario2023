import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductsService } from 'src/app/services/products.service';
import { NumberAcountPipe } from '../../pipes/number-acount.pipe';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [ NumberAcountPipe ]
})
export class CardComponent{

  @Input() product:Product=new Product();
  pais:string='COP';
  moneda:string='$';
  typeb:string="3";
constructor(private service:ProductsService,private router: Router){

}

  save(){
    this.service.save({id:'3332', name:'sdsdf', description:'dfgdg', price:9000,code:"000000"}).subscribe(data => {
      if(data.status==200){
        alert("Resgisto Guardado con exito");
      }
    },error => {
      console.log(error.error.text);
    });
  }

  routerToAdd(){
    //this.router.navigate(['/productos'], { queryParams: { id: 1, nombre: 'Ejemplo' } });
    this.router.navigate(['/productos','44','yy']);
    //this.router.navigate([{ path: '/producto' }]);
  }

  handleMousePosition(position: { x: number, y: number }){
    const x = position.x;
    const y = position.y;
    console.log(`Posición del ratón - X: ${x}, Y: ${y}`);
    //this.xMouse = x;
    //this.yMouse = y;
  }

}
