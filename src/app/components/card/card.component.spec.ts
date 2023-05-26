import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

class muckService{
  save(){
    return of({data:{status:200}});
  }
}

class muckRouter{

}

fdescribe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        {provide:ProductsService,useClass:muckService},
        {provide:Router,useClass:muckRouter}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('save', () => {
    spyOn(component,'alerta');
    console.log(component.save());
    expect(component.alerta).toHaveBeenCalled();
  });
});
