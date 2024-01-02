import { Component, inject, signal } from '@angular/core';
import { RepositorioResponse } from 'src/app/interfaces/repositorios,interface';
import { GithubsService } from 'src/app/services/githubs.service';

@Component({
  selector: 'section-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  private repositorios = signal<RepositorioResponse[]>([]);

  private _gitHubService = inject(GithubsService);

  constructor(){
    this._gitHubService.githubsRepos().subscribe( (repositorios) => {
      this.repositorios.set(repositorios);
      console.log(this.repositorios())
     })
  }

  get _repositorios(){
      return [...this.repositorios()];
  }
}
