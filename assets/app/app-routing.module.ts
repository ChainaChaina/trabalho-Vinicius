import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/auth/authentication.component';
import { MessagesComponent } from './components/messages/messages.component';

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
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const AppRouting = RouterModule.forRoot(routes);
