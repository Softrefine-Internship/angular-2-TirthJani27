import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDivComponent } from './user-div/user-div.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UserDivComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
