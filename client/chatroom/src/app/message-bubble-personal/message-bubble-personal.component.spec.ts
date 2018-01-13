import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBubblePersonalComponent } from './message-bubble-personal.component';

describe('MessageBubblePersonalComponent', () => {
  let component: MessageBubblePersonalComponent;
  let fixture: ComponentFixture<MessageBubblePersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBubblePersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBubblePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
