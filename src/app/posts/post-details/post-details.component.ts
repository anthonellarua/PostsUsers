import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
  postId!: number;
  post!: { id: number, title: string, content: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = parseInt(params.get('id')!, 10);
      this.post = {
        id: this.postId,
        title: 'Título de la publicación ' + this.postId,
        content: 'Contenido de la publicación ' + this.postId
      };
    });
  }
}
