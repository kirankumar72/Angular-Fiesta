import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAcc } from './create-new-acc';

describe('CreateNewAcc', () => {
  let component: CreateNewAcc;
  let fixture: ComponentFixture<CreateNewAcc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewAcc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewAcc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
