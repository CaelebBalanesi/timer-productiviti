import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './pages/homepage/navbar/navbar.component';
import { TimersMenuComponent } from './pages/homepage/timers-menu/timers-menu.component';
import { NewTimerMenuComponent } from './pages/homepage/new-timer-menu/new-timer-menu.component';
import { TimerComponent } from './pages/homepage/timers-menu/timer/timer.component';
import { TimePipe } from './pages/homepage/timers-menu/timer/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    TimersMenuComponent,
    NewTimerMenuComponent,
    TimerComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
