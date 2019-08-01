import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';
import { ExploreModule } from './explore/explore.module';
import { CoreModule } from './core/core.module';
import { StatisticsModule } from './statistics/statistics.module';
import { BreedManageModule } from './breed-manage/breed-manage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    ExploreModule,
    StatisticsModule,
    BreedManageModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
