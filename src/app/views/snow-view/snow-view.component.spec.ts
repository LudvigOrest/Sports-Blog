import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowViewComponent } from './snow-view.component';

describe('SnowViewComponent', () => {
  let component: SnowViewComponent;
  let fixture: ComponentFixture<SnowViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnowViewComponent]
    });
    fixture = TestBed.createComponent(SnowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
