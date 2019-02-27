import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotComponent } from './bot/bot.component';

const routes: Routes = [
  { path: '', component: BotComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
