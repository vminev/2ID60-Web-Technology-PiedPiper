import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomChatBoxComponent } from './chat-room-chat-box.component';

describe('ChatRoomChatBoxComponent', () => {
  let component: ChatRoomChatBoxComponent;
  let fixture: ComponentFixture<ChatRoomChatBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomChatBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
