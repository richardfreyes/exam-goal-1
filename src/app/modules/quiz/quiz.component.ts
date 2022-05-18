import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { JsonService } from '../shared/services/json.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questionsData: any[] = [];
  quizForm: FormGroup;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[] = [];
  result: any = { score: 0, items: 0 };
  isSubmitted: boolean = false;
  isSubmittedSuccess: boolean = false;
  jsonState: any = null;

  constructor(
    private jsonService: JsonService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.autoRun();
  }

  autoRun() {
    this.listeners();
    this.initialisers();
  }

  initialisers() {
    this.initFilter();
    this.initQuizForm();
  }

  listeners() {
    this.listenOnGetQuestions();
  }

  initFilter() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''), map(value => this.filter(value))
    );
  }

  initQuizForm() {
    this.quizForm = this.formBuilder.group({
      answersId: this.formBuilder.array([])
    });
  }

  initQuestionData(data: any) {
    data.map((res: any) => {
      this.ans.push(this.formBuilder.group({ answer: new FormControl ("", Validators.required) }))
    })
  }

  listenOnGetQuestions() {
    this.jsonService.getQuestionsData().subscribe({
      next: (data: any) => {
        this.questionsData = data;
        this.initQuestionData(data);
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

  handleChooseAnswer(value: any, index: any) {
    this.questionsData[index].selected = value;
  }

  handleOnSubmitAnswer({ value, valid }: { value: any; valid: boolean }) {
    this.isSubmitted = true;
    if (!this.quizForm.invalid) {
      this.questionsData.map((data, index) => {
        this.result.items = this.result.items + 1;
  
        if(data?.type === 'multipleChoice' || data?.type === 'yesNo' && data.selected != 0) {
          if (data.selected == data.answer) { 
            this.result.score = this.result.score + 1
          };
        }
      })

      this.isSubmittedSuccess = true;
    }
  }

  handleReset() {
    this.isSubmitted = false;
    this.quizForm.reset();
  }

  get ans() {
    return this.quizForm.get("answersId") as FormArray;
  }
}
