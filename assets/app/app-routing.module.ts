import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/auth/authentication.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AuthRouting } from './components/auth/auth-routing.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mensagens',
  },
  {
    path: 'mensagens',
    component: MessagesComponent,
  },
  {
    path: 'autenticacao',
    component: AuthenticationComponent,
    children: AuthRouting,
  },
  {
    path: '**',
    redirectTo: 'mensagens',
  },
];

export const AppRouting = RouterModule.forRoot(routes);
