import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    const { email, password } =  f.form.value;
    
    this.auth.SignIn(email,password).then((res)=> {
      this.router.navigateByUrl('/');
      this.toastr.success('SignIn sucsess');
    }).catch((error)=> {
      console.log(error.message);
      this.toastr.error('signIn failed')
    })
    }
    



}
