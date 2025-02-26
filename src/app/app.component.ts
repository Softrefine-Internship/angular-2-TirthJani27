import { Component, ViewChild } from '@angular/core';
import { UserDivComponent } from './user-div/user-div.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  textColor = '#878877';
  backgroundColor = '#454545';
  @ViewChild('userDiv') userDiv!: UserDivComponent;
  onChange() {
    this.userDiv.changeColor(this.backgroundColor, this.textColor);
  }
}
