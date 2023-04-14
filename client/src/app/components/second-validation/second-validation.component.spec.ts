import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondValidationComponent } from './second-validation.component';

describe('SecondValidationComponent', () => {
  let component: SecondValidationComponent;
  let fixture: ComponentFixture<SecondValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
