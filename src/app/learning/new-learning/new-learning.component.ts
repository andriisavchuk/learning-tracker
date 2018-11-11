import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LearningService } from '../learning.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-learning',
  templateUrl: './new-learning.component.html',
  styleUrls: ['./new-learning.component.css']
})
export class NewLearningComponent implements OnInit {
  // @Output() learningStart = new EventEmitter<void>();
  exercises: Exercise[] = [];

  constructor(private learningService: LearningService) {}

  ngOnInit() {
    this.exercises = this.learningService.getAvailableExercises();
  }

  onStartLearning() {
    // this.learningStart.emit();
    this.learningService.startExercise(id);
  }
}
