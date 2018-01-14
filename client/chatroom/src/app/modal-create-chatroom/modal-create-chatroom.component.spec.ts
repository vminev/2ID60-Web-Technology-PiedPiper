import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateChatroomComponent } from './modal-create-chatroom.component';

describe('ModalCreateChatroomComponent', () => {
  let component: ModalCreateChatroomComponent;
  let fixture: ComponentFixture<ModalCreateChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
