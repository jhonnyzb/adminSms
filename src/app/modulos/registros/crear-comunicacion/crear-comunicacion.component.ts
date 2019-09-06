import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crear-comunicacion',
  templateUrl: './crear-comunicacion.component.html',
  styleUrls: ['./crear-comunicacion.component.css']
})
export class CrearComunicacionComponent implements OnInit, OnDestroy {
  contac: string= '';
  idtag: number;
  formularioComunicacion: FormGroup;
  Para: string = '';
  De: string = '';
  datarecibida: any;
  AddComSubscription: Subscription;
  EnvioMensajeSuscription: Subscription;
  contador: number = 0;
  mensajes: number = 1;
  

  constructor(private Routed: ActivatedRoute, private Formbuilder: FormBuilder, private Servicio: ServiceAllService) {
    this.contac = this.Routed.snapshot.paramMap.get('id');
    this.idtag = Number(this.Routed.snapshot.paramMap.get('idtag'));
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {

    this.formularioComunicacion = this.Formbuilder.group(
      {
        de:['', Validators.required],
        descripcion: ['', Validators.required],
        nombreCampaña: ['', Validators.required]
      }
    )
  }

  changePara(e: any) {
    this.Para = e.target.value;
  }

  changeDe(e: any) {
    this.De = e.target.value;
  }


  SendComunicacion(form:any){
    let envio = {
      from: form.value.de,
      tags: [ {id :this.idtag}],
      texto: form.value.descripcion,
      numero_atributos: 1
    }
    console.log(envio)
    this.EnvioMensajeSuscription =  this.Servicio.envioMensaje(envio).subscribe(
      (res:any)=>{
        console.log(res)
        this.datarecibida = res;
      }
    )
  }

  onKey(event) {
    this.contador = event.target.value.length;
    if (this.contador <= 160) {
      this.mensajes = 1
    } else if (this.contador <= 320) {
      this.mensajes = 2
    } else if (this.contador <= 480) {
      this.mensajes = 3
    } else if (this.contador <= 640) {
      this.mensajes = 4
    } else if (this.contador <= 800) {
      this.mensajes = 5
    } else if (this.contador <= 960) {
      this.mensajes = 6
    }
    else if (this.contador <= 1120) {
      this.mensajes = 7
    }
  }

ngOnDestroy(){
  if(this.AddComSubscription){
    this.AddComSubscription.unsubscribe();
  }
  if(this.EnvioMensajeSuscription){
    this.EnvioMensajeSuscription.unsubscribe();
  }
}


}
