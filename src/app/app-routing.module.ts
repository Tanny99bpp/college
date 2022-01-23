import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { AnnualMarksheetComponent } from './annual-marksheet/annual-marksheet.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent //Main home page
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'admin', component:AdminComponent, canActivate:[RouteGuardService] // canActivate is a interface and RouteGuard Service helps to prevent to any other page without login
  },
  {
    path:'annual_marksheet', component:AnnualMarksheetComponent, canActivate:[RouteGuardService]
  },
  {
    path: 'logout', component:LogoutComponent, canActivate:[RouteGuardService]
  },
  {
    path:'**', component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
