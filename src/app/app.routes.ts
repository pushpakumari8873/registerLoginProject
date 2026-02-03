import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { loginGuard } from './login.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,

    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [loginGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];
