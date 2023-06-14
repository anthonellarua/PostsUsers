import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  posts = [
    { id: 1, title: 'Publicación 1', content: 'Contenido de la publicación 1' },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2' },
    { id: 3, title: 'Publicación 3', content: 'Contenido de la publicación 3' },
    { id: 4, title: 'Publicación 4', content: 'Contenido de la publicación 4' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPostDetails(id: number) {
    this.router.navigate(['/posts', id]);
  }
}
