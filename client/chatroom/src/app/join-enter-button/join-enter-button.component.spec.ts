import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinEnterButtonComponent } from './join-enter-button.component';

describe('JoinEnterButtonComponent', () => {
  let component: JoinEnterButtonComponent;
  let fixture: ComponentFixture<JoinEnterButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinEnterButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinEnterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
