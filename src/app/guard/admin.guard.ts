// import { CanActivateFn, Router } from '@angular/router';

// export const adminGuard: CanActivateFn = (route, state) => {
//   const router = new Router();
//   const userConnect = JSON.parse(localStorage.getItem('userOnline') || '');
//   if (userConnect.role == "admin") {
//     return true;
//   }
//   else {
//     router.navigate(['login']);
//     return false;
//   }
// };
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
