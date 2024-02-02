import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth : ConnexionService, private route:Router){}
  formData: any = {
    email: "",
    password : "",
  }

  register: any = {
    email: '',
    name: '',
    password:''
  }
  connecion() {
    console.log("voir input element", this.formData)
    const Datainput = {
      email: this.formData.email,
      password :  this.formData.password,
    }
    this.auth.loginUser(Datainput).subscribe((resplogin) => {
      console.log("voir login", resplogin);
      if (resplogin.status==200) {
        alert("connexion réussie");
        // console.log(resplogin.user.role==="visiteur");
        if (resplogin.user.role === "visiteur") {

          this.route.navigate(['/accueil']);
        } else if (resplogin.user.role === "admin") {
          this.route.navigate(['/admin']);
        }
      }
    })

}

  inscription() {
    console.log("voir input element", this.formData)
    const Datainput = {
      email: this.register.email,
      password: this.register.password,
      name:this.register.name
    }
    this.auth.registerUser(Datainput).subscribe((respRegister) => {
      console.log("voir Register", respRegister)
      if (respRegister.status==200) {
        alert("inscription réussie");
      }
    })
  }
}
