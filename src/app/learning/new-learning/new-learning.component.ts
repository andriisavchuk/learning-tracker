import { Component, OnInit } from '@angular/core';

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
  selectedValue: string;

  tasks: Tasks[] = [
    {value: 'algorithms-0', viewValue: 'Algorithms'},
    {value: 'data-1', viewValue: 'Data Structures'},
    {value: 'java-2', viewValue: 'Java'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
