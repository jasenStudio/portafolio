import { Component } from '@angular/core';
import { Jobs } from 'src/app/interfaces/jobs.interface';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'section-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  public jobs:Jobs[] =[];
  public job:Jobs = {
    id:'',
    dateWork:'',
    occupation:'',
    description:''
  }
  constructor(private __jobs:JobsService){
    this.jobs = __jobs.allWork();

    this.job = __jobs.allWork()[0];

  }

  public nameJobs:string[] = [
    'Sigpe Consultores S.A.S','ARUS S.A','Ice Cream And Coffee'
  ]

  showJobs( termino:string ){

    let job = this.jobs.filter( ( job )=> job.id === termino )
    console.log( job )
return this.job = job[0]
  }


}
