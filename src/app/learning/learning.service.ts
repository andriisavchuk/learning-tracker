import { Subject } from 'rxjs';

import { Exercise } from './exercise.model';

export class LearningService {
  exerciseChanged = new Subject<Exercise>();
  private runningExercise: Exercise;
  private availableExercises: Exercise[] = [
    { id: 'linkedlist', name: 'Linked List', duration: 210, score: 100 },
    { id: 'arraylist', name: 'Array List', duration: 120, score: 100 },
    { id: 'classes', name: 'Classes', duration: 180, score: 100 },
    { id: 'interfaces', name: 'Interfaces', duration: 90, score: 100 }
  ];

  /**
  * A getter method that with slice() returns a copy of a same array
  */
  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  /**
  * Sets the chosen exercise to user
  * @param selectedId The string with exercise ID
  */
  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    // emits if changes happened
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }
}
