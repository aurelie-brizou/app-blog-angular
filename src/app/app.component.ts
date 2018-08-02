import { Component } from '@angular/core';
import { Post } from './domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // array des posts à partir de la classe Post
  posts: Post[] = [];

  postOne: Post = new Post('Mon premier post', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam', 0);
  postTwo: Post = new Post('Mon second post', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam', 0);
  postThree: Post = new Post('Mon dernier post', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam', 0)

  constructor() {
    this.posts.push(this.postOne);
    this.posts.push(this.postTwo);
    this.posts.push(this.postThree);
  };
}
