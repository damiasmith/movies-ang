import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';

  watched = [
    new Movie('StarWars: Rise of SkyWalker', 'action', 2019),
    new Movie('Little Women', 'drama', 2019)
  ];

  toWatch = [
    new Movie('Jumanji', 'comedy', 2019),
    new Movie('Knives Out', 'mystery', 2019)
  ];
}
