import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { JobsComponent } from './jobs/jobs.component';
import { CardJobsComponent } from './jobs/components/card-jobs/card-jobs.component';
import { ProjectsComponent } from './projects/projects.component';
import { CardProjectComponent } from './projects/components/card-project/card-project.component';
import { ImagesProjectPipe } from './projects/pipes/imagesProject.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GreetingComponent,
    AboutMeComponent,
    JobsComponent,
    CardJobsComponent,
    CardProjectComponent,
    ProjectsComponent,
    ContactsComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    ImagesProjectPipe,
    FormsModule,ReactiveFormsModule
  ],
  exports:[
    GreetingComponent,
    AboutMeComponent,
    JobsComponent,
    ProjectsComponent,
    ContactsComponent
  ]

})
export class SectionsModule { }
