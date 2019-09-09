import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-comunicacion-tags',
  templateUrl: './crear-comunicacion-tags.component.html',
  styleUrls: ['./crear-comunicacion-tags.component.css']
})
export class CrearComunicacionTagsComponent implements OnInit {


  arrayenvio: any[] = [];
  arrayTags: any[];
  datarecibida: any;
  contador: number = 0;
  mensajes: number = 1;
  de: number;
  contenido: string = '';
  textoBoton ='{ }' 
  errorEnvioMensaje: boolean = false;
  bienEnvioMeensaje: boolean =  false;
  cargueDatos: boolean = true;

  constructor( private Servicio: ServiceAllService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit() {
   
    this.getTag();
  }

 

  getTag() {
    this.arrayTags = JSON.parse(localStorage.getItem("arraytags"))

  }

  agregarAtributoAtexto(atributo){
    this.contenido = this.contenido + ' {{' + atributo + '}} '
  }

  SendComunicacionMasivo() {

    for (var i = 0; i < this.arrayTags.length; i++) {
      this.arrayenvio.push({ id : this.arrayTags[i].id})
    }
   
    let envio = {
      from: this.de,
      tags: this.arrayenvio,
      texto: this.contenido,
      numero_atributos: 1
    }
    console.log(envio)
    this.Servicio.envioMensaje(envio).subscribe(
      (res:any) => {
        console.log(res)
        this.cargueDatos = false;
        if (res.codigoRespuesta == 1001) {
          this.errorEnvioMensaje = true;
        }else{
          this.bienEnvioMeensaje = true;
          this.datarecibida = res;
        }
      },
      (err) => {
        this.toastrService.error('Intente Nuevamente o contacte con el administrador del sistema', 'Error conexión servidor', {
          timeOut: 1500, positionClass: 'toast-top-right', progressBar: true, progressAnimation: 'decreasing'
        });
      }
    )
  }

  limpiarTodo(){
    this.errorEnvioMensaje = false;
    this.bienEnvioMeensaje = false;
    this.cargueDatos = true;
    this.router.navigate(['/usuario/tags'])
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



  

}


