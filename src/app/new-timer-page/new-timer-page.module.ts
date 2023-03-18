import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTimerPagePageRoutingModule } from './new-timer-page-routing.module';

import { NewTimerPagePage } from './new-timer-page.page';
import { NewTimeMenuComponent } from './new-time-menu/new-time-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTimerPagePageRoutingModule
  ],
  declarations: [NewTimerPagePage, NewTimeMenuComponent],
})
export class NewTimerPagePageModule {}
