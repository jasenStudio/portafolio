import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepositorioResponse } from '../interfaces/repositorios,interface';
import { filter, map, tap } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GithubsService {

 private httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${environment.token_authorization}`
});

  private http = inject(HttpClient);
  constructor( ) {

    console.log("Este es el servicio que consume git HUb")

   }

   githubsRepos(){
    return this.http.get<RepositorioResponse[]>('https://api.github.com/users/jasenStudio/repos',{headers: this.httpHeaders})
            .pipe(
              tap( response => console.log(response)),
              map(response => response.filter(response => response.homepage != null && response.homepage != "")),
              tap( response => console.log(response)),
              map((response: RepositorioResponse[]) => {
                return response.map(repo => this.mapToRepositorioResponse(repo));
             })

              )
   }

private mapToRepositorioResponse(repo: RepositorioResponse): RepositorioResponse {
  // Use Pick to select only the desired properties from the original repo object
  return {
    id: repo.id,
    name: repo.name,
    full_name: repo.full_name,
    description: repo.description,
    url: repo.url,
    created_at: repo.created_at,
    pushed_at: repo.pushed_at,
    git_url: repo.git_url,
    clone_url: repo.clone_url,
    language: repo.language,
    topics: repo.topics,
    homepage:repo.homepage
  };
}

}
