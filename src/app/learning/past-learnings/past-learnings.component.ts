import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Exercise } from '../exercise.model';
import { LearningService } from '../learning.service';

@Component({
  selector: 'app-past-learnings',
  templateUrl: './past-learnings.component.html',
  styleUrls: ['./past-learnings.component.css']
})
export class PastLearningsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'score', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private learningService: LearningService) { }

  ngOnInit() {
    this.dataSource.data = this.learningService.getCompletedAndCanceledExercises();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
