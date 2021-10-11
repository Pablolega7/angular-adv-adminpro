import { Component,NgZone,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public formSubmitted=false;
  public auth2:any;

  public loginForm=this.fb.group({

    email:[localStorage.getItem('email')||'',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    remember:[false]
  },
);

  constructor(private router:Router, private fb:FormBuilder, private usarioservice:UsuarioService, private ngZOne:NgZone) { }

  ngOnInit(): void {

    this.renderButton();
  };

  login(){

    this.usarioservice.login(this.loginForm.value).subscribe(resp=>{

      if (this.loginForm.get('remeber')?.value) {
        localStorage.setItem('email',this.loginForm.get('email')?.value);
      }
      else{
        localStorage.removeItem('email');
      };

       this.router.navigateByUrl('/');
    },(err=>{
      Swal.fire('Error',err.error.msg,'error');
    }))
  };
    
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });

    this.startApp();
  };

  async startApp(){

     await this.usarioservice.googleInit();
     this.auth2=this.usarioservice.auth2;

     this.attachSignin(document.getElementById('my-signin2'));
  };

   attachSignin(element:any) {

   this.auth2.attachClickHandler(element, {},
        (googleUser:any)=>{
         const id_token = googleUser.getAuthResponse().id_token;

         this.usarioservice.loginGoogle(id_token).subscribe(resp=>{

           this.ngZOne.run(()=>{
            this.router.navigateByUrl('/');
           });

         });
        },(error:any)=> {
          alert(JSON.stringify(error, undefined, 2));
        });
  };
};
