import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { MonstersComponent } from './monsters/monsters.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { AbilityModifierPipe } from './ability-modifier.pipe';
import { ChallengeRatingPipe } from './challenge-rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MonstersComponent,
    MonsterDetailComponent,
    AbilityModifierPipe,
    ChallengeRatingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
