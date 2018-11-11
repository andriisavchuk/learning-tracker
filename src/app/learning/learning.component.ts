import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LearningService } from './learning.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  ongoingLearning = false;
  exerciseSubscription: Subscription;

  constructor(private learningService: LearningService) {}

  ngOnInit() {
    this.exerciseSubscription = this.learningService.exerciseChanged.subscribe(
      exercise => {
        // this.ongoingLearning = !!exercise; another if-else approach
        if (exercise) {
          this.ongoingLearning = true;
        } else {
          this.ongoingLearning = false;
        }
      }
    );
  }
}
