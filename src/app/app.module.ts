import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { QuizComponent } from './modules/quiz/quiz.component';
import { AppComponent } from './modules/core/app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { JsonService } from './modules/shared/services/json.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizResultComponent } from './modules/shared/components/quiz-result/quiz-result.component';
import { RatingComponent } from './modules/shared/components/rating/rating.component';
import { CorrectStateComponent } from './modules/shared/components/correct-state/correct-state.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonComponent } from './modules/shared/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizResultComponent,
    RatingComponent,
    CorrectStateComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
