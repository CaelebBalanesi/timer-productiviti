import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './pages/homepage/navbar/navbar.component';
import { TimersMenuComponent } from './pages/homepage/timers-menu/timers-menu.component';
import { NewTimerMenuComponent } from './pages/homepage/new-timer-menu/new-timer-menu.component';
import { TimerComponent } from './pages/homepage/timers-menu/timer/timer.component';
import { TimePipe } from './pages/homepage/timers-menu/timer/time.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NumericOnlyDirective } from './pages/homepage/new-timer-menu/numeric-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    TimersMenuComponent,
    NewTimerMenuComponent,
    TimerComponent,
    TimePipe,
    NumericOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
