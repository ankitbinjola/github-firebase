import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

onSubmit(f: NgForm){
const { email, password } =  f.form.value;

this.auth.SignUp(email,password).then((res)=> {
  this.router.navigateByUrl('/');
  this.toastr.success('Signup sucsess');
}).catch((error)=> {
  console.log(error.message);
  this.toastr.error('signup failed')
})
}



}
