import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { auth } from 'firebase';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
email= null;


//using email to populate the value even before initializing the view thats why use the contructor
  constructor(private authservice : AuthService , private toastr: ToastrService, private router: Router) { 
    authservice.getUser().subscribe((user)=> {
      this.email = user?.email;
    })
  }

  ngOnInit(): void {
  }

//sign out and moving user to sign in page again by routing and making email varaibale to null
//also using asyn function get response on the await from authservice signout

  async handleSignOut(){
    try{
      const res = await this.authservice.SignOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info('login Again');
      this.email='null';
    }
    catch(error){
      this.toastr.error('there is some problem in SignIn');
    }
  }




}
