import { Exercise } from './exercise.model';

export class LearningService {
  private availableExercises: Exercise[] = [
    { id: 'linkedlist', name: 'Linked List', duration: 180, score: 100 },
    { id: 'arraylist', name: 'Array List', duration: 120, score: 100 },
    { id: 'classes', name: 'Classes', duration: 180, score: 100 },
    { id: 'interfaces', name: 'Interfaces', duration: 180, score: 100 }
  ];

  /*
  * A getter method that with slice() returns a copy of a same array
  */
  getAvailableExercises() {
    return this.availableExercises.slice();
  }
}
