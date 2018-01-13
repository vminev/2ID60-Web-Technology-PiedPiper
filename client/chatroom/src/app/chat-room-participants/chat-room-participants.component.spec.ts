import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomParticipantsComponent } from './chat-room-participants.component';

describe('ChatRoomParticipantsComponent', () => {
  let component: ChatRoomParticipantsComponent;
  let fixture: ComponentFixture<ChatRoomParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
