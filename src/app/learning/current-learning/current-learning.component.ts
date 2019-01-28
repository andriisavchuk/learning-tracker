import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StopLearningComponent } from './stop-learning.component.';
import { LearningService } from '../learning.service';

@Component({
  selector: 'app-current-learning',
  templateUrl: './current-learning.component.html',
  styleUrls: ['./current-learning.component.css']
})
export class CurrentLearningComponent implements OnInit {
  /**
   * EventEmitter that emits an event when user exits current learning task
   */
  // @Output() learningExit = new EventEmitter();

  progress = 0;
  timer: number;

  constructor(
    private dialog: MatDialog,
    private learningService: LearningService
  ) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  /**
   * Method that launches or stops a timer for a spinner in a CurrentLearning component
   */
  startOrResumeTimer() {
    const step =
      (this.learningService.getRunningExercise().duration / 100) * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.learningService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  /**
   * Method that shows a modal dialog window with two actions Stop and No
   * for current learning task.
   */
  onStop() {
    clearInterval(this.timer);
    // dialogRef object for handling data in modal dialog window
    const dialogRef = this.dialog.open(StopLearningComponent, {
      data: {
        progress: this.progress
      }
    });

    /*Observable that tracks if the modal dialog window closed*/
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.learningExit.emit();
        this.learningService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}
