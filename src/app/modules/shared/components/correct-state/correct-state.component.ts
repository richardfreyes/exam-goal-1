import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-correct-state',
  templateUrl: './correct-state.component.html',
  styleUrls: ['./correct-state.component.scss']
})
export class CorrectStateComponent implements OnInit {
  @Input() state: boolean;
  wordState: string;

  constructor() { }

  ngOnInit(): void { }
}
