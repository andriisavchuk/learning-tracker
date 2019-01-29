import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise.model';
import { LearningService } from '../learning.service';

@Component({
  selector: 'app-past-learnings',
  templateUrl: './past-learnings.component.html',
  styleUrls: ['./past-learnings.component.css']
})
export class PastLearningsComponent
  implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['date', 'name', 'duration', 'score', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  private exercisesChangedSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private learningService: LearningService) {}

  ngOnInit() {
    this.exercisesChangedSubscription = this.learningService.finishedExercisesChanged.subscribe(
      (exercises: Exercise[]) => {
        this.dataSource.data = exercises;
      }
    );
    this.learningService.getCompletedAndCanceledExercises();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.exercisesChangedSubscription.unsubscribe();
  }
}
