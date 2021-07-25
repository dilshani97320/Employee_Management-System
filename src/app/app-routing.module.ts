import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryEmployeeComponent } from './entry-employee/entry-employee.component';
import { LoginComponent } from './login/login.component';
import { MidEmployeeComponent } from './mid-employee/mid-employee.component';

const routes: Routes = [
//{path:'',component:LoginComponent},
{path:'',component:DashboardComponent},
{path:'mid-employee',component:MidEmployeeComponent},
{path:'entry-employee',component:EntryEmployeeComponent},
{path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
