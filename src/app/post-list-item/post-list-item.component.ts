import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../domain';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  // incrémente les clics 
  onAddlove() {
    this.post.loveIts++;
    console.log(this.post.loveIts);

  }

  // décrémente les clics 
  onAddDontLove() {
    this.post.loveIts--;
    console.log(this.post.loveIts);
  }

}
