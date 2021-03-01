import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    AngularFireAuthGuard,
    redirectUnauthorizedTo,
    redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';
import { DeliveriesComponent } from './features/deliveries/deliveries.component';
import { LoginComponent } from './features/login/login.component';
import { SupplyComponent } from './features/supply/supply.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
    { path: '', redirectTo: 'deliveries', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToHome },
    },
    {
        path: 'deliveries',
        component: DeliveriesComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
    },
    {
        path: 'supply',
        component: SupplyComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
