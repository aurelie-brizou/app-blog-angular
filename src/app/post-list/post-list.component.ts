import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../domain';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // reçoit l'array de app-component
  @Input() posts:Post[];

  constructor() { }


  ngOnInit() {
  }

}
