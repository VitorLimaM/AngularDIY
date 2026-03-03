import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiy } from './form-diy';

describe('FormDiy', () => {
  let component: FormDiy;
  let fixture: ComponentFixture<FormDiy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDiy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDiy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
