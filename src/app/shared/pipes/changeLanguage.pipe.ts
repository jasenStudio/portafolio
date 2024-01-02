import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'ChangeLanguage',
  standalone: true,
})
export class ChangeLanguagePipe implements PipeTransform {
  private links = {
    about: 'Acerca de mi',
    experience: 'Experiencias',
    work: 'proyectos',
    Contact: 'Contacto',
    Resume:'HV'
  };

  transform(value: string) {

    Object.entries(this.links).forEach(([key, valueLink]) => {

   if(key === value){
    value = valueLink;
   }
    });
    return value;
  }
}
