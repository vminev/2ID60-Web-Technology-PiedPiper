import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBubbleOthersComponent } from './message-bubble-others.component';

describe('MessageBubbleOthersComponent', () => {
  let component: MessageBubbleOthersComponent;
  let fixture: ComponentFixture<MessageBubbleOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBubbleOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBubbleOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
