import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  duration = 40000;
  text: number;

  onChange(updatedValue: number) : void {
    this.duration = updatedValue;
  }
}
