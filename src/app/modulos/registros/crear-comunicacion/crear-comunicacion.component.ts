import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-comunicacion',
  templateUrl: './crear-comunicacion.component.html',
  styleUrls: ['./crear-comunicacion.component.css']
})
export class CrearComunicacionComponent implements OnInit, OnDestroy {
  contac: string= '';
  idtag: number;
  Para: string = '';
  De: string = '';
  datarecibida: any;
  AddComSubscription: Subscription;
  EnvioMensajeSuscription: Subscription;
  contador: number = 0;
  mensajes: number = 1;
  descripcion:string = ''; 
  de: number;    
  textoBoton ='{ }' 
  errorEnvioMensaje: boolean = false;
  bienEnvioMeensaje: boolean =  false;
  cargueDatos: boolean = true;
  arrayAtributos: any[];
  contadorAtributos: number = 0;
  tags: any;
  

  constructor(private Routed: ActivatedRoute, private Servicio: ServiceAllService, private toastrService: ToastrService, private router: Router ) {
    this.contac = this.Routed.snapshot.paramMap.get('id');
    this.idtag = Number(this.Routed.snapshot.paramMap.get('idtag'));
  }

  ngOnInit() {
    this.obtenerAtributos();
   
  }



  changePara(e: any) {
    this.Para = e.target.value;
  }

  changeDe(e: any) {
    this.De = e.target.value;
  }


  agregarAtributoAtexto(atributo){
    this.contadorAtributos = this.contadorAtributos + 1
    this.descripcion = this.descripcion + ' {{' + atributo + '}} '

  }


  SendComunicacion(){
  
    let envio = {
      from: this.de,
      tags: this.tags.tags,
      texto: this.descripcion,
      numero_atributos: this.contadorAtributos
    }
    console.log(envio)
    this.EnvioMensajeSuscription =  this.Servicio.envioMensaje(envio).subscribe(
      (res:any)=>{
        console.log(res)
        this.cargueDatos = false;
        if (res.codigoRespuesta == 1001) {
          this.errorEnvioMensaje = true;
        }else{
          this.bienEnvioMeensaje = true;
          this.datarecibida = res;
        }     
      },(erro)=>{
          this.toastrService.error('Intente Nuevamente o contacte con el administrador del sistema', 'Error conexión servidor', {
          timeOut: 1500, positionClass: 'toast-top-right', progressBar: true, progressAnimation: 'decreasing'
        });

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
    else if (this.contador <= 1280) {
      this.mensajes = 8
    }
    else if (this.contador <= 1440) {
      this.mensajes = 9
    }
    else if (this.contador <= 1600) {
      this.mensajes = 10
    }
    
  }

  limpiarTodo(){
    this.errorEnvioMensaje = false;
    this.bienEnvioMeensaje = false;
    this.cargueDatos = true;
    this.router.navigate(['/usuario/personal'])

  }


  obtenerAtributos(){
    let arrayTags  = JSON.parse(localStorage.getItem('arregloTagsRegistroPersona'))
    if (  arrayTags.length > 0 ) {
      this.tags = {
        tags: arrayTags
      }    
    }else{
      this.tags = {
        tags: [{id: this.idtag}]
      }
    }
    console.log(this.tags)
    this.Servicio.obtenerAtributos(this.tags).subscribe(
      (res: any)=>{
        console.log(res)
        this.arrayAtributos = res
      },
      (err)=>
      {
        console.log('error getatributos', err)
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
