import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LearningService } from '../learning.service';
import { Exercise } from '../exercise.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-learning',
  templateUrl: './new-learning.component.html',
  styleUrls: ['./new-learning.component.css']
})
export class NewLearningComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  exerciseSubscription: Subscription;

  constructor(private learningService: LearningService) {}

  ngOnInit() {
    this.exerciseSubscription = this.learningService.exercisesChanged.subscribe(
      exercises => (this.exercises = exercises)
    );
    this.learningService.getAvailableExercises();
  }

  onStartLearning(form: NgForm) {
    this.learningService.startExercise(form.value.exercise);
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }

}
