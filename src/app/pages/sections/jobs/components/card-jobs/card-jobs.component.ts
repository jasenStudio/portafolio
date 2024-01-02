import { Component, Input } from '@angular/core';
import { Jobs } from 'src/app/interfaces/jobs.interface';

@Component({
  selector: 'jobs-card-jobs',
  templateUrl: './card-jobs.component.html',
  styleUrls: ['./card-jobs.component.css']
})
export class CardJobsComponent {

  @Input() job!:Jobs

}
