import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = null;
  userName : string;
  Error = null;

  constructor(private git : GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleFindUser(){
    this.git.getUserDetails(this.userName).subscribe((data)=> {
      this.user = data;
      this.Error = null;
      console.log(this.user);
      this.ref.detectChanges();
    },(error)=> {
      this.user = null;
      this.Error = "user not found";
    })
  }

}
