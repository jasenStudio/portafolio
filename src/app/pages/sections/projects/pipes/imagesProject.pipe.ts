import { Pipe, type PipeTransform } from '@angular/core';
import { RepositorioResponse } from 'src/app/interfaces/repositorios,interface';

@Pipe({
  name: 'imagesProject',
  standalone: true,
})
export class ImagesProjectPipe implements PipeTransform {

  transform(repositorio:RepositorioResponse) {

    if( !repositorio.id ){
      return 'assets/images/no-image.png'
    }

    return `assets/images/${ repositorio.id }.png`;

  }

}
