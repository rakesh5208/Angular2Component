import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'list', component: AppComponent },
    { path: 'add-event', component: AppComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: '**', redirectTo: '/list', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }