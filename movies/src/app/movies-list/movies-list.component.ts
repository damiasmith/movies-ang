import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input() movies: Movie[];
  @Input() name: string;
  constructor() {
  }

  ngOnInit() {
  }
  details(movie: Movie) {
    alert(`details for ${movie.title}`);
  }

}
