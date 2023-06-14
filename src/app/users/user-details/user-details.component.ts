import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId!: number;
  user: { id: number, name: string, email: string } | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = parseInt(params.get('id')!, 10);
      this.getUserDetails(this.userId);
    });
  }

  getUserDetails(id: number) {
    this.user = { id: id, name: 'Usuario ' + id, email: 'usuario' + id + '@ejemplo.com' };
  }
}
