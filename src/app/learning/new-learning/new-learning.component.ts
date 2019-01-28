import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LearningService } from '../learning.service';
import { Exercise } from '../exercise.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-learning',
  templateUrl: './new-learning.component.html',
  styleUrls: ['./new-learning.component.css']
})
export class NewLearningComponent implements OnInit {
  // @Output() learningStart = new EventEmitter<void>();
  // exercises: Exercise[] = [];
  exercises: Observable<Exercise[]>;

  constructor(
    private learningService: LearningService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    // this.exercises = this.learningService.getAvailableExercises();
    // this.exercises = this.db.collection('availableExercises').valueChanges();
    this.exercises = this.db
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            } as Exercise;
          });
        })
      );
    // .subscribe(result => {
    //   for (const res of result) {
    //     console.log(res.payload.doc.data());
    //   }
    // });
  }

  onStartLearning(form: NgForm) {
    // this.learningStart.emit();
    this.learningService.startExercise(form.value.exercise);
  }
}
