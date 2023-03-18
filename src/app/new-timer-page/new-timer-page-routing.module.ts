import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTimerPagePage } from './new-timer-page.page';

const routes: Routes = [
  {
    path: '',
    component: NewTimerPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTimerPagePageRoutingModule {}
