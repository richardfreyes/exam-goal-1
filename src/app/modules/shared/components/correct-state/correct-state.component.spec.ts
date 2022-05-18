import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectStateComponent } from './correct-state.component';

describe('CorrectStateComponent', () => {
  let component: CorrectStateComponent;
  let fixture: ComponentFixture<CorrectStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
