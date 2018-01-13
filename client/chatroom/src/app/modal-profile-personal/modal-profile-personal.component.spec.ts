import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProfilePersonalComponent } from './modal-profile-personal.component';

describe('ModalProfilePersonalComponent', () => {
  let component: ModalProfilePersonalComponent;
  let fixture: ComponentFixture<ModalProfilePersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProfilePersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProfilePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
