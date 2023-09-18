import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() postArray:Post[] = [];
  @Input() favArray:Post[] = [];

  constructor(reddit: RedditService) {
    reddit.getPosts().then((posts) => (this.postArray = posts))
  }

  removePost(post: Post): void {
    this.postArray = this.postArray.filter(p => p.id !== post.id);
    console.log(this.postArray);
    console.log('Post rimosso', this.postArray);
  }

  addToFav(post:Post): void {
    this.favArray.push(post);
  }
}