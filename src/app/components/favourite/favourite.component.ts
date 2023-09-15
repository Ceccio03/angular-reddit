import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit{
  favArray: Post[] = [];

  constructor(private dataServ:DataService) {}

  ngOnInit(): void {
    this.favArray = this.dataServ.load('favArray') || [];
  }
}
