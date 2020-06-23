import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: any;

  constructor(private git : GithubService) { }

  ngOnInit(): void {
    this.git.getUserDetails(this.user).subscribe((data) => {
      this.user = data;   
      console.log(this.user);
  })  


  }
}







