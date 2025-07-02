import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vacancy } from './vacancy';

describe('Vacancy', () => {
  let component: Vacancy;
  let fixture: ComponentFixture<Vacancy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vacancy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vacancy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
