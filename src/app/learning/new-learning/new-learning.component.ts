import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface Tasks {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-learning',
  templateUrl: './new-learning.component.html',
  styleUrls: ['./new-learning.component.css']
})
export class NewLearningComponent implements OnInit {
  @Output() learningStart = new EventEmitter<void>();

  selectedValue: string;

  tasks: Tasks[] = [
    {value: 'algorithms-0', viewValue: 'Algorithms'},
    {value: 'data-1', viewValue: 'Data Structures'},
    {value: 'java-2', viewValue: 'Java'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onStartLearning() {
    this.learningStart.emit();
  }

}
