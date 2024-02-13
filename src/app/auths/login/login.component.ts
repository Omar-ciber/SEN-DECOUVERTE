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

  constructor(private auth: ConnexionService, private route: Router) {}

  formData: any = {
    email: "",
    password: "",
  }

  register: any = {
    email: '',
    name: '',
    password: ''
  }

  connecion() {
    if (!this.validateEmail(this.formData.email)) {
      Swal.fire({
        title: "Erreur",
        text: "Format d'e-mail incorrect",
        icon: "error"
      });
      return;
    }

    if (!this.validatePasswordLength(this.formData.password)) {
      Swal.fire({
        title: "Erreur",
        text: "Mot de passe doit contenir au moins 6 caractères",
        icon: "error"
      });
      return;
    }

    const Datainput = {
      email: this.formData.email,
      password: this.formData.password,
    }

    this.auth.loginUser(Datainput).subscribe((resplogin) => {
      console.log("voir login", resplogin);
      localStorage.setItem('userOnline', JSON.stringify(resplogin));

      if (resplogin.user.role == "visiteur") {
        Swal.fire({
          title: "Good job!",
          text: "Connexion Reussie!",
          icon: "success"
        });
        this.route.navigate(['/accueil']);
      } else if (resplogin.user.role == "admin") {
        Swal.fire({
          title: "Good job!",
          text: "Connexion Reussie!",
          icon: "success"
        });
        this.route.navigate(['/admin']);
      }
    });
  }

  inscription() {
    if (!this.validateEmail(this.register.email)) {
      Swal.fire({
        title: "Erreur",
        text: "Format d'e-mail incorrect",
        icon: "error"
      });
      return;
    }

    if (!this.validatePasswordLength(this.register.password)) {
      Swal.fire({
        title: "Erreur",
        text: "Mot de passe doit contenir au moins 6 caractères",
        icon: "error"
      });
      return;
    }

    const Datainput = {
      email: this.register.email,
      password: this.register.password,
      name: this.register.name
    }

    this.auth.registerUser(Datainput).subscribe((respRegister) => {
      console.log("voir Register", respRegister)

        Swal.fire({
          title: "Good job!",
          text: "Inscription Reussie!",
          icon: "success"
        });

    })
    this.register.email=''
  }

  // Validation de l'e-mail
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validation de la longueur du mot de passe
  validatePasswordLength(password: string): boolean {
    return password.length >= 6;
  }

  // Méthode pour gérer le retour à l'accueil
  retourAccueil() {
    this.router.navigate(['/accueil']);
  }
}
