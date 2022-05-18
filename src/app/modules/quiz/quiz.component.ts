import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { JsonService } from '../shared/services/json.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questionsData: any[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[] = [];
  result: any = { score: 0, items: 0 };
  isSubmitted: boolean = false;
  jsonState: any = null;

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.autoRun();
  }

  autoRun() {
    this.listeners();
    this.initialisers();
  }

  initialisers() {
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this.filter(value)));
  }

  listeners() {
    this.listenOnGetQuestions();
  }

  listenOnGetQuestions() {
    this.jsonService.getQuestionsData().subscribe({
      next: (data: any) => {
        this.questionsData = data;
        if(this.questionsData.length !== 0) { this.jsonState = true; }
      },
      error: error => { this.jsonState = error.status; console.log('this.jsonState', this.jsonState) }
    });
  }

  filter(value: string): string[] {
    const filterValue = value ? value.toLowerCase() : '';
    let filterArray: any[] = [];
    this.options = filterArray.filter(function(item, pos, self) { return self.indexOf(item) == pos });
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  handleOnSubmitAnswer() {
    this.questionsData.map((data, index) => {
      this.result.items = this.result.items + 1;

      if(data?.type === 'multipleChoice' || data?.type === 'yesNo' && data.selected != 0) {
        if (data.selected == data.answer) { this.result.score = this.result.score + 1 };
      }
    })

    this.isSubmitted = true;
  }
}
