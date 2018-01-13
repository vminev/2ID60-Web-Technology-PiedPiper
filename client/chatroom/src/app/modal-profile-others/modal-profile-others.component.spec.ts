import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProfileOthersComponent } from './modal-profile-others.component';

describe('ModalProfileOthersComponent', () => {
  let component: ModalProfileOthersComponent;
  let fixture: ComponentFixture<ModalProfileOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProfileOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProfileOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
