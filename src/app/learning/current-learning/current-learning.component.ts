import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-learning',
  templateUrl: './current-learning.component.html',
  styleUrls: ['./current-learning.component.css']
})
export class CurrentLearningComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }

}
