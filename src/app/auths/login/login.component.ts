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

    // Variables pour faire la vérifications
  verifName : String  =  "";
  verifEmail : String = "";
  verifPassword : String = "";

  // Variables si les champs sont exacts
  exactName : boolean = false;
  exactEmail : boolean = false;
  exactPassword: boolean = false;
// Fonction pour verication du nom lors d l'inscription
  verifNameFonction() {
    const nameRegex=/^[a-zA-Z][a-zA-Z -]{1,100}$/;
    this.exactName = false;
    if(this.register.name == ""){
      this.verifName = "Veuillez renseigner votre nom";
    }
    else if (this.register.name.length < 2 ){
      this.verifName = "Le nom est trop court";
    }else if (!this.register.name.match(nameRegex)) {
       this.verifName = "Le nom ne dois pas avoir de caractere speciaux";
    }
    else {
      this.verifName = "";
      this.exactName = true;
    }
  }
// Fonction de verication pour le mail avec les pattern lors de l'inscription
  verifEmailFonction(){
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactEmail = false;

    if(this.register.email == ""){
      this.verifEmail = "Veuillez renseigner votre email";
    }
    else if (!this.register.email.match(emailPattern) ){
      this.verifEmail = "Veuillez donner un email valide";
    }
    else {
      this.verifEmail = "";
      this.exactEmail = true;
    }
  }
// Fonction de verication pour le mail avec les pattern lors de la connexion
  verifEmailConnexionFonction(){
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactEmail = false;

    if(this.formData.email == ""){
      this.verifEmail = "Veuillez renseigner votre email";
    }
    else if (!this.formData.email.match(emailPattern) ){
      this.verifEmail = "Veuillez donner un email valide";
    }
    else {
      this.verifEmail = "";
      this.exactEmail = true;
    }
  }


// Fonction pour verificaton pour le mot de pass lors de l'inscription
   verifPasswordFonction(){
    this.exactPassword = false;
    if(this.register.password == ""){
      this.verifPassword = "Veuillez renseigner votre mot de passe";
    }
    else if (this.register.password.length < 5 ){
      this.verifPassword = "Mot de passe doit être supérieur ou égal à 5";
    }
    else{
      this.verifPassword = "";
      this.exactPassword = true;
    }
   }
  // Fonction pour verificaton pour le mot de pass lors de la connexion

   verifPasswordConnexionFonction(){
    this.exactPassword = false;
    if(this.formData.password == ""){
      this.verifPassword = "Veuillez renseigner votre mot de passe";
    }
    else if (this.formData.password.length < 5 ){
      this.verifPassword = "Mot de passe doit être supérieur ou égal à 5";
    }
    else{
      this.verifPassword = "";
      this.exactPassword = true;
    }
   }
  // fonction pour la connexion
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
      localStorage.setItem('token', JSON.stringify(resplogin.authorization.token));

      // console.warn('le userOnline', resplogin)

      if (resplogin.user.role == "visiteur") {
        Swal.fire({
          title: "Merci!!!",
          text: "Connexion Reussie!",
          icon: "success",
          timer:1500
        });
        this.route.navigate(['/accueil']);
      } else if (resplogin.user.role == "admin") {
        Swal.fire({
          title: "Merci!!!",
          text: "Bienvenue!",
          icon: "success",
          timer:1500
        });
        this.route.navigate(['/admin']);
      }
    });
  }
// pour la connexion du guide
  connecionGuide() {
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

    this.auth.loginGuide(Datainput).subscribe((resplogin) => {
      console.log ('voire login guide')
      console.log("voir login", resplogin);
      localStorage.setItem('userOnline', JSON.stringify(resplogin));
      localStorage.setItem('token', JSON.stringify(resplogin.authorization.token));

      this.route.navigate(['/admin']);
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
          title: "Merci!!!",
          text: "Inscription Reussie!",
          icon: "success",
          timer:1500
        });

    })
    this.register.email=''
  }

  // Validation de l'e-mail
  // validateEmail(email: string): boolean {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // }

  validateEmail(email: string): boolean {
    const emailRegex=/^[A-Za-z]+[A-Za-z0-9\._%+-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  validatePasswordLength(password: string): boolean {
    return password.length >= 6;
  }

  // visualiser le mot de passe saisie
  showPassword = false;

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}

  // Méthode pour gérer le retour à l'accueil
  retourAccueil() {
    this.router.navigate(['/accueil']);
  }
}
