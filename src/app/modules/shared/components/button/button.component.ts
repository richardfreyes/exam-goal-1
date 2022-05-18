import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() addClass: string;
  @Input() text: string;
  @Input() color: string;
  @Input() buttonType: string;

  constructor() { }

  ngOnInit(): void { }
}
