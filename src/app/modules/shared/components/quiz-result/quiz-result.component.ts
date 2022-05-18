import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {
  @Input() data: any[];
  @Input() result: any;

  constructor() { }

  ngOnInit(): void {}
}
