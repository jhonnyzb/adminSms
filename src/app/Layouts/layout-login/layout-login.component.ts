import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout-login',
  templateUrl: './layout-login.component.html',
  styleUrls: ['./layout-login.component.css']
})
export class LayoutLoginComponent implements OnInit {
  //Declaración de variables
  dataLoginSubscription: Subscription;
  formularioLogin: FormGroup;
  minlength: number = 3;
  formularioReset: FormGroup;

  constructor(private Formbuilder: FormBuilder, private toastrService: ToastrService,private router: Router, private Services: ServiceAllService ) { }

  ngOnInit() {
    this.buildForm();
    this.buildFormReset();
  }

   //Metodo declaración formulario login
   private buildForm() {

    this.formularioLogin = this.Formbuilder.group(
      {
        userName: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(this.minlength)]]
      }
    )
  }

   //Metodo declaración formulario reset password
   private buildFormReset() {

    this.formularioReset = this.Formbuilder.group(
      {
        mailReset: ['', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]]
      }
    )

  }


   //Metodo acceder al servicio del login
   public onLogin(forms: FormGroup) {
    this.dataLoginSubscription = this.Services.login(forms.value.userName, forms.value.password).subscribe(
      (res: any) => {      
        if (res.codigoRespuesta === 1001) {       
            this.toastrService.error('Compruebe las credenciales', 'Error', {
            timeOut: 1500, positionClass: 'toast-bottom-center', progressBar: true, progressAnimation: 'decreasing'
          });
       } else {

         localStorage.setItem('token',res.access_token)
         this.router.navigate(['usuario'])
       }

      }, (erro) => {
        this.toastrService.error('Usuario no autorizado', 'Error', {
          timeOut: 1500, positionClass: 'toast-bottom-center', progressBar: true, progressAnimation: 'decreasing'
        });
      })
  }



    //Metodo Para reset el formulario reset password
    public clear(forms: FormGroup) {
      forms.reset();
    }
  
   //Metodo deteccion error  formulario Login input userName y Password 
   public getError(controlName: string): boolean {
    let error = false;
    if (controlName == 'userName') {
      const control = this.formularioLogin.get(controlName);
      if (control.touched && control.errors != null) {
        error = true
      }
    } else {
      const control = this.formularioLogin.get(controlName);
      if (control.touched && control.errors != null) {
        error = true
      }

    }
    return error;
  }


  //Metodo deteccion error formulario resetpassword input 
  public getErrorReset(controlName: string): boolean {
    let error = false;
    const control = this.formularioReset.get(controlName);
    if (control.touched && control.errors != null) {
      error = true;
    }
    return error;
  }

  //Metodo de desuscription al observable
  ngOnDestroy() {
    this.dataLoginSubscription.unsubscribe();
  }

}


