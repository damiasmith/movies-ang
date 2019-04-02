import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

 isFavorite; boolean;

    onClick() {
      this.isFavorite = !this.isFavorite;
 }

  constructor() { }

  ngOnInit() {
  }

}
