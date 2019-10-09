import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { DisplayComponent } from './display/display.component';
import { EnterComponent } from './enter/enter.component';
import { BestFilmsComponent } from './best-films/best-films.component';
import { HightLightDirective } from './hight-light.directive';
import { DisplayFilmsDirective } from './display-films.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    DisplayComponent,
    EnterComponent,
    BestFilmsComponent,
    HightLightDirective,
    DisplayFilmsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
