import { AdminComponent } from './components/admin/admin.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/view/:email',
    component: ViewRegistrationComponent
  },
  {
    path: 'admin/delete/:email',
    component: ViewRegistrationComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
