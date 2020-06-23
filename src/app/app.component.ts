import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-firebase';

  constructor(private auth : AuthService){
    this.auth.getUser().subscribe((user) => {
      console.log(user);
    },(error)=> {
      console.log(error);
    })
  }


}