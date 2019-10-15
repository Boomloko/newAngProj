import { BestFilmsComponent } from './best-films/best-films.component';
import { ProfilComponent } from './profil/profil.component';
import { Routes } from '@angular/router';

const ROUTES: Routes = [
    { path: 'best-films', component: BestFilmsComponent },
    { path: 'profil', component: ProfilComponent },
    { path: '', component: ProfilComponent}
];

export { ROUTES };