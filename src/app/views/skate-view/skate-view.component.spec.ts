import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateViewComponent } from './skate-view.component';

describe('SkateViewComponent', () => {
  let component: SkateViewComponent;
  let fixture: ComponentFixture<SkateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkateViewComponent]
    });
    fixture = TestBed.createComponent(SkateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
