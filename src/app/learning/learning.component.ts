import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  /**
  * Define if current task is started
  */
  ongoingLearning = false;

  constructor() { }

  ngOnInit() {
  }

}
