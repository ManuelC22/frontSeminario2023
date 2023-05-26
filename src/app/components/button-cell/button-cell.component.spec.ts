import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonCellComponent } from './button-cell.component';

describe('ButtonCellComponent', () => {
  let component: ButtonCellComponent;
  let fixture: ComponentFixture<ButtonCellComponent>;
  let typeStyle=2;
  let styleLight = {
    'font-size': '15px',
    'color': 'white',
    'background-color': '#ABB2B9'
  };

  let styleDark = {
    'font-size': '15px',
    'color': 'white',
    'background-color': '#2C3E50'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two 4+5 and expect result 9', () => {
    //Arrange
    let number1:number=4;
    let number2:number=5;
    //Act
    let result=component.addPositive(number1,number2);
    //Assert
    expect(result).toEqual(9);
  });

  it('should add 0+5 and expect result 5', () => {
    //Arrange
    let number1:number=0;
    let number2:number=5;
    //Act
    let result=component.addPositive(number1,number2);
    //Assert
    expect(result).toEqual(5);
  });

  it('should add 10000+5 and expect result 10005', () => {
    //Arrange
    let number1:number=10000;
    let number2:number=5;
    //Act
    let result=component.addPositive(number1,number2);
    //Assert
    expect(result).toEqual(10005);
  });

  it('should add two number and show error', () => {
    //Arrange
    let number1:number=4;
    let number2:number=-5;
    
    expect(() => {
      //Act
      component.addPositive(number1,number2);
    }).toThrowError('sumando 2 no puede ser negativo');//Assert
  });

  it('should add two number and show error', () => {
    //Arrange
    let number1:number=-4;
    let number2:number=5;
    
    expect(() => {
      //Act
      component.addPositive(number1,number2);
    }).toThrowError('No se puede sumar un numero negativo');//Assert
  });

  it('should getStyle return styleDark because param is 2',()=>{
  

    //Act
    let resp = component.getStyle(typeStyle);

    //Assert
    expect(resp).toEqual(styleDark);

  });
 
  it('should getStyle return styleDark because param is 2',()=>{
    //Arrange
    let typeStyle=2;
    //Act
    let resp = component.getStyle(typeStyle);

    //Assert
    expect(resp).toEqual(styleDark);

  });

  it('should getStyle return styleLight because param is 5',()=>{
    //Arrange
    let typeStyle=5;
    //Act
    let resp = component.getStyle(typeStyle);

    //Assert
    expect(resp).toEqual(styleLight);

  });

  it('', () => {
    spyOn(component.eventClick, 'emit');
    component.onClickBtn();
    expect(component.eventClick.emit).toHaveBeenCalled();
  });

});
