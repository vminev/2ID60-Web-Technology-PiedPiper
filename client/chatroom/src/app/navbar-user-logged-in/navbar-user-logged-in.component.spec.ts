import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUserLoggedInComponent } from './navbar-user-logged-in.component';

describe('NavbarUserLoggedInComponent', () => {
  let component: NavbarUserLoggedInComponent;
  let fixture: ComponentFixture<NavbarUserLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarUserLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUserLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
