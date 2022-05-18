import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() result: any;
  grade: any = { writtenGrade: '', equivalence: '', description: ''};

  constructor() { }

  ngOnInit(): void {
    this.autoRun();
  }

  autoRun() {
    this.listeners();
    this.initialisers();
  }

  initialisers() {
    this.computeGrad();
  }

  listeners() { }

  computeGrad() {
    let value = parseInt((this.result?.score / 15 * 100).toString());
    if(value <= 46) { this.grade = { writtenGrade: 'F', equivalence: `${value}%`, description: 'Failed' } }
    if(value >= 50 && value <= 56) { this.grade = { writtenGrade: 'D', equivalence: `${value}%`, description: 'Passed' } }
    if(value >= 57 && value <= 63) { this.grade = { writtenGrade: 'D+', equivalence: `${value}%`, description: 'Satisfactory' } }
    if(value >= 64 && value <= 70) { this.grade = { writtenGrade: 'C', equivalence: `${value}%`, description: 'Satisfactory' } }
    if(value >= 71 && value <= 77) { this.grade = { writtenGrade: 'C+', equivalence: `${value}%`, description: 'Good' } }
    if(value >= 78 && value <= 84) { this.grade = { writtenGrade: 'B', equivalence: `${value}%`, description: 'Very Good' } }
    if(value >= 85 && value <= 91) { this.grade = { writtenGrade: 'B+', equivalence: `${value}%`, description: 'Very Good' } }
    if(value >= 92 && value <= 100) { this.grade = { writtenGrade: 'A', equivalence: `${value}%`, description: 'Excellent' } }
    console.log('this.result', this.result);
    console.log('this.grade', this.grade);
  }
}