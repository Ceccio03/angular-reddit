import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ConnectionService } from 'src/app/services/connection.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  postData:Post[] = [];
  favArray:Post[] = [];

  constructor(private connServ:ConnectionService, private dataServ:DataService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.favArray = this.dataServ.load('favArray') || [];
      const posts = await this.connServ.getPosts();
      this.postData = posts;
    } catch (error) {
      console.error('Errore nella chiamata HTTP:', error);
    }
  }

  addFav(post:Post) {
    this.favArray.push(post);
    this.dataServ.save('favArray', this.favArray);
  }
}