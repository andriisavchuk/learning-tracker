import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLearningComponent } from './current-learning.component';

describe('CurrentLearningComponent', () => {
  let component: CurrentLearningComponent;
  let fixture: ComponentFixture<CurrentLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
