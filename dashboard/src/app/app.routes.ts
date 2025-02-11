import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { TablesComponent } from './business/tables/tables.component';
import { ProfileComponent } from './business/profile/profile.component';
import { LoginComponent } from './business/authentication/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { authenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [authGuard]
            },
            {
                path: 'tables',
                component: TablesComponent,
                canActivate: [authGuard]
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [authenticatedGuard]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }

];
