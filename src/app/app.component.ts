import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  playMusic(numero: number): void {
    const audio = new Audio();
    audio.src = `./notes/note${numero}.mp3`;
    audio.play();
  }
}
