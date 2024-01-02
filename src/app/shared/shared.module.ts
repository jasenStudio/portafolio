import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarMovilComponent } from './components/side-bar/nav-bar-movil.component';
import { ButtonHamburgerComponent } from './components/button-hamburger/button-hamburger.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { RouterModule } from '@angular/router';
import { ChangeLanguagePipe } from './pipes/changeLanguage.pipe';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavBarMovilComponent,
    NavbarComponent,
    ButtonActionComponent,
    FooterComponent


  ],
  imports: [
    CommonModule,
    ButtonHamburgerComponent,
    RouterModule,
    ChangeLanguagePipe
  ],
  exports:[
    NavBarMovilComponent,
    NavbarComponent,
    ButtonActionComponent,ChangeLanguagePipe,FooterComponent
  ]
})
export class SharedModule { }
