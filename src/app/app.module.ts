import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AproposComponent } from './apropos/apropos/apropos.component';
import { ExplorerComponent } from './explorer/explorer/explorer.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { ContactezNousComponent } from './contact/contactez-nous/contactez-nous.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './Administrateur/admin/admin.component';
import { AuthComponent } from './auths/auth/auth.component';
import { LoginComponent } from './auths/login/login.component';
import { UtilisationComponent } from './condition/utilisation/utilisation.component';
import { ConfidentialiteComponent } from './politque/confidentialite/confidentialite.component';
import { DetailsComponent } from './explorer/details/details.component';
import { SidebarComponent } from './Administrateur/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponent,
    AproposComponent,
    ExplorerComponent,
    AccueilComponent,
    ContactezNousComponent,
    AdminComponent,
    AuthComponent,
    LoginComponent,
    UtilisationComponent,
    ConfidentialiteComponent,
    DetailsComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
