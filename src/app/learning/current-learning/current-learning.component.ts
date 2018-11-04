import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StopLearningComponent } from './stop-learning.component.';

@Component({
  selector: 'app-current-learning',
  templateUrl: './current-learning.component.html',
  styleUrls: ['./current-learning.component.css']
})
export class CurrentLearningComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopLearningComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
