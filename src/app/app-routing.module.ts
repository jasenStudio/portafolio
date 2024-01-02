import { NgModule, Component } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { GreetingComponent } from './pages/sections/greeting/greeting.component';
import { AboutMeComponent } from './pages/sections/about-me/about-me.component';
import { JobsComponent } from './pages/sections/jobs/jobs.component';
import { ProjectsComponent } from './pages/sections/projects/projects.component';



const routes: Routes = [
  {
    path:'',
    component:GreetingComponent
  },
  {
    path:'about',
    component:AboutMeComponent
  },
  {
    path:'experience',
    component:JobsComponent
  },
  {
    path:'work',
    component:ProjectsComponent
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
