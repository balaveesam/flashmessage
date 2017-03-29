import {Routes,RouterModule} from '@angular/router';
import{AppComponent} from './app.component';
import{RegisterComponent} from'./register/register.component';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';


export const routes:Routes=[
    { path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'register', component:RegisterComponent},
    {path:'home',component:HomeComponent}
];

export const route:ModuleWithProviders=RouterModule.forRoot(routes);
// ModuleWithProviders = RouterModule.forRoot(appRoutes);