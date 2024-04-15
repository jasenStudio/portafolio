import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailjsService } from 'src/app/services/emailjs.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'section-contacts',
  templateUrl:'./contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {

private emailService:EmailjsService = inject(EmailjsService);
private fb:FormBuilder = inject(FormBuilder);

public formContact:FormGroup = this.fb.group({
  fullname:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  messages:['',Validators.required]

})

isValidField( field:string){

  return this.formContact.controls[field].errors && this.formContact.controls[field].touched
}

getFieldError(field:string):string | null{

  if( !this.formContact.controls[field]) return null;

  console.log('estoy aca')
  const errors = this.formContact.controls[field].errors || {};

  for ( const key of Object.keys(errors)){
    switch( key ){
      case 'required':
        return 'Este campo es requerido';
      case 'minlength':
        return `Minimo ${errors['minlength'].requiredLength } caracters.`
      case 'email':
        return 'Ingrese un email valido'
    }
  }

  return null ;
}


  onSubmit(){
    console.log(this.formContact.value)


    if( this.formContact.invalid ){
      Swal.fire({
            icon: "error",
            title: "Oops los todos campos son requeridos",
            confirmButtonText: `
                  Aceptar  `,
          });
      this.formContact.markAllAsTouched;
      return;
    }


    const fullname = this.formControlValue('fullname');
    const email = this.formControlValue('email');
    const messages = this.formControlValue('messages')

    this.emailService.sendMessage(fullname,email,messages);

    this.formContact.reset();
  }

  formControlValue(name:string){
   return this.formContact.controls[name].value;
  }

 }
