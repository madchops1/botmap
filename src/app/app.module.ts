import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { DisqusModule } from 'ngx-disqus';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BotComponent } from './bot/bot.component';
import { FooterComponent } from './footer/footer.component';
import { SinglePostComponent } from './disqus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BotComponent,
    FooterComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    DisqusModule.forRoot('botmap')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
