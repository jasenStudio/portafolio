import { Component, Input, inject, signal } from '@angular/core';
import { RepositorioResponse } from 'src/app/interfaces/repositorios,interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import Swal from 'sweetalert2'

@Component({
  selector: 'project-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {

//  @Input() repositorio?:RepositorioResponse = signal<RepositorioResponse>([]);
@Input() repositorio!:RepositorioResponse;
private responsive     = inject(BreakpointObserver);

click(imageIrl:string){

console.log(screen.width);






}




}
