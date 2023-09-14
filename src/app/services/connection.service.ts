import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor() { }

  getPosts():Promise<void | Post[]> {
    return fetch('./assets/post.json')
    .then(resp => resp.json())
    .then(redditObj => redditObj.data)
    .then(data => data.children)
    .then(children => children.map((c:any) => c.data));
  }
}
