import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MidEmployeeComponent } from './mid-employee/mid-employee.component';
import { EntryEmployeeComponent } from './entry-employee/entry-employee.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MidEmployeeComponent,
    EntryEmployeeComponent,
    LoginComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
     

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
