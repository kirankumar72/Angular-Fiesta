import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorApp } from './calculator-app';

describe('CalculatorApp', () => {
  let component: CalculatorApp;
  let fixture: ComponentFixture<CalculatorApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
