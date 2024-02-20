import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = new Router();
   if (localStorage.getItem('token')==null || localStorage.getItem('token')==undefined) {
    Swal.fire({
      icon:'error',
      text:'Connectez-vous si vous voulez acceder à cet espace',
      title:'Oops',
      confirmButtonColor: "#1E1E1E",
    }

    )
    router.navigate(['/login']);
    return false;

  }else{

    return true;
  }
};
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class AdminGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     const userConnect = JSON.parse(localStorage.getItem('userOnline') || '');

//     if (userConnect && userConnect.role === 'admin') {
//       return true;
//     } else {
//       this.router.navigate(['login']);
//       return false;
//     }
//   }
// }
