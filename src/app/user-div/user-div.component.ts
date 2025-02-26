import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-div',
  standalone: false,
  templateUrl: './user-div.component.html',
  styleUrls: ['./user-div.component.scss'],
})
export class UserDivComponent {
  @ViewChild('div2') div!: ElementRef;
  @ViewChild('h2') h2!: ElementRef;
  backgroundColor = '#454545';
  textColor = '#878877';

  ngAfterViewInit() {
    this.div.nativeElement.style.backgroundColor = this.backgroundColor;
    this.h2.nativeElement.style.color = this.textColor;
  }
  changeColor(bg: string, t: string) {
    this.div.nativeElement.style.backgroundColor = bg;
    this.h2.nativeElement.style.color = t;
  }
}
