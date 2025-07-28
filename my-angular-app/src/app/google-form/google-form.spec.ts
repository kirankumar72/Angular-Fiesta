import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleForm } from './google-form';

describe('GoogleForm', () => {
  let component: GoogleForm;
  let fixture: ComponentFixture<GoogleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
