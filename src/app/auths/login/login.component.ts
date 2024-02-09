import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router: any;

  constructor(private auth: ConnexionService, private route: Router) {

  }
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
      localStorage.setItem('userOnline', JSON.stringify(resplogin));
      // if (resplogin.status==200) {
        // alert("connexion réussie");
        // console.log(resplogin.user.role==="visiteur");
      if (resplogin.user.role == "visiteur") {
          Swal.fire({
          title: "Good job!",
          text: "Connexion Reussi!",
          icon: "success"
        });
          this.route.navigate(['/accueil']);
      } else if (resplogin.user.role == "admin") {
        Swal.fire({
          title: "Good job!",
          text: "Connexion Reussi!",
          icon: "success"
        });
          this.route.navigate(['/admin']);
        }
      // }
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
        Swal.fire({
          title: "Good job!",
          text: "Inscription Reussi!",
          icon: "success"
        });
      }
    })
  }
  // pour le flèche retour au page d'accueil

  // Méthode pour gérer le retour à l'accueil
  retourAccueil() {
    this.router.navigate(['/accueil']);
  }

  // fin
}
