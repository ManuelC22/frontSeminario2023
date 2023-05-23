import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMenuComponent } from './principal-menu.component';

describe('PrincipalMenuComponent', () => {
  let component: PrincipalMenuComponent;
  let fixture: ComponentFixture<PrincipalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
