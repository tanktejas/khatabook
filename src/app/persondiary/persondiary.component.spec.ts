import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondiaryComponent } from './persondiary.component';

describe('PersondiaryComponent', () => {
  let component: PersondiaryComponent;
  let fixture: ComponentFixture<PersondiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersondiaryComponent]
    });
    fixture = TestBed.createComponent(PersondiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
