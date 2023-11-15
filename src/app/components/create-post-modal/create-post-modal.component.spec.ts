import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostModalComponent } from './create-post-modal.component';

describe('CreatePostModalComponent', () => {
  let component: CreatePostModalComponent;
  let fixture: ComponentFixture<CreatePostModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostModalComponent]
    });
    fixture = TestBed.createComponent(CreatePostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
