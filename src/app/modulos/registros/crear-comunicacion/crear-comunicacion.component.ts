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
  EnvioMensajeSuscription: Subscription

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
    let comunicacion = {
      id:this.idtag,
      para: this.contac,
      de: form.value.de,
      message: form.value.descripcion,
      nombreCampaña: form.value.nombreCampaña
    }
    this.AddComSubscription = this.Servicio.addComunicacion(comunicacion).subscribe(
      (res:any)=>{
        if(res.CodigoRespuesta > 0){

        }else{
            let envio ={
              from: form.value.de,
              tags: [ {id :this.idtag}]
            }
          this.EnvioMensajeSuscription =  this.Servicio.envioMensaje(envio).subscribe(
            (res)=>{
              this.datarecibida = res;
              console.log(this.datarecibida);
            },
            (err)=>{
              console.log(err)
            }
            )
        }
          console.log('bien',res)
      },
      (err)=>{
        console.log('',err)
      }
    )


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
