import { ComponentFixture, TestBed,tick,fakeAsync } from '@angular/core/testing';

import { NavbarSimpleComponent } from './navbar-simple.component';

describe('NavbarSimpleComponent', () => {
  let component: NavbarSimpleComponent;
  let fixture: ComponentFixture<NavbarSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

  it('should show buttons',  fakeAsync(() => {
    //fixture.detectChanges();
    //let state=true;
    const element = fixture.nativeElement.querySelector('#buttons');
    component.edited=true;
    //component.cambiarHijos(state);
    //tick(1000);
    //fixture.detectChanges();
    console.log(component.edited)
    console.log(element);
    //expect(element).toBeFalsy();
  }));
});
