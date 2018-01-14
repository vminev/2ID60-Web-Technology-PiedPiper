import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUserAnnonymousComponent } from './navbar-user-annonymous.component';

describe('NavbarUserAnnonymousComponent', () => {
  let component: NavbarUserAnnonymousComponent;
  let fixture: ComponentFixture<NavbarUserAnnonymousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarUserAnnonymousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUserAnnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
