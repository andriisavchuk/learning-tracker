import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Exercise } from '../exercise.model';
import { LearningService } from '../learning.service';

@Component({
  selector: 'app-past-learnings',
  templateUrl: './past-learnings.component.html',
  styleUrls: ['./past-learnings.component.css']
})
export class PastLearningsComponent implements OnInit {
  displayedColumns = ['date', 'name', 'duration', 'score', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  constructor(private learningService: LearningService) { }

  ngOnInit() {
    this.dataSource.data = this.learningService.getCompletedAndCanceledExercises();
  }

}
