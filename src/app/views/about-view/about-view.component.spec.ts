import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutViewComponent } from './about-view.component';

describe('AboutViewComponent', () => {
  let component: AboutViewComponent;
  let fixture: ComponentFixture<AboutViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutViewComponent]
    });
    fixture = TestBed.createComponent(AboutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
