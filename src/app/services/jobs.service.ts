import { Injectable } from '@angular/core';
import { Jobs } from '../interfaces/jobs.interface';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  public jobs:Jobs[] = [

    {
      id:           "Sigpe Consultores S.A.S",
      occupation:   "Desarrollador front end",
      dateWork:     "Mar 2022 - Sep 2023",
      description:  "Construir aplicativos web a la medida para clientes, orientados a la seguridad ocupacional y salud en el trabajo. ",
      descripction1:"Trabajar junto con directores, supervisores para el desarrollo y la arquitectura de soluciones técnicas para cumplir con los requisitos.",
      descripction2:"Desarrollar aplicativos para necesidades internas de la empresa."
    },
    {
      id:           "ARUS S.A",
      occupation:   "Auxiliar de soporte",
      dateWork:     "Sep 2021 - Feb 2022",
      description:  "Instalacion y soporte de equipos informaticos (escritorio,portatiles,impresoras), atención al cliente en el área de informática y soporte de hardware y software en las empresas del medio.",
    },
    {
        id:           "Ice Cream And Coffee",
        occupation:   "Desarrollador front end",
        dateWork:     "Jun 2020 - Jul 2021",
        description:  "Desarrollo de aplicativo web con tecnologia Ruby On Rails, Postgresql, Soporte a la aplicacion del medio",

    }




  ];


  constructor() {


   }


   allWork():Jobs[]{
    return this.jobs;
   }
}
