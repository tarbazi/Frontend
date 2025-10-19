import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { Placeorder } from './pages/home/placeorder/placeorder';
import { Signup } from './pages/home/signup/signup';

export const routes: Routes = [
    {   path: '', component: Home   },
    {   path: 'placeorder', component: Placeorder   },
    {   path: 'signup', component: Signup   } 
];
