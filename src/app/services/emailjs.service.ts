import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {

  constructor() { }

  async sendMessage(fullname:string,email:string,message:string){
        emailjs.init('G1ehB--jzgJg9zpno')
  let response =  await emailjs.send("service_h85skvk","template_eyuk1jk",{
        to_name: "Jorge",
        from_name: "Portafolio",
        from_email: "jsalgadoecheverria@gmail.com",
        subject: `Este mensaje viene desde el portafolio enviado por ${fullname} - ${email}`,
        message: message,
        });


        const { status } = response;

        if( status == 200){
          Swal.fire({
            title: "El Mensaje se ha enviado correctamente &#128512;",
            text: "Gracias por comunicarte conmigo!! ",
            icon: "success",
            confirmButtonText: `
              Aceptar!  `,
          });
        }

        if(status != 200){
          Swal.fire({
            title: "Oops No se pudo enviar el mensaje '>&#128546;",
            text: "Estamos solucionando el inconveniente !! ",
            icon: "error",
            confirmButtonText: `
              Aceptar  `,
          });
        }

  }

}
