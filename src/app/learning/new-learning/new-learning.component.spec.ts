import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLearningComponent } from './new-learning.component';

describe('NewLearningComponent', () => {
  let component: NewLearningComponent;
  let fixture: ComponentFixture<NewLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
