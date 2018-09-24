import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLearningsComponent } from './past-learnings.component';

describe('PastLearningsComponent', () => {
  let component: PastLearningsComponent;
  let fixture: ComponentFixture<PastLearningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastLearningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastLearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
