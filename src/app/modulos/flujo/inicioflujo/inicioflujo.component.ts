import { Component, OnInit, ɵConsole, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceAllService } from 'src/app/services/service-all.service';

@Component({
  selector: 'app-inicioflujo',
  templateUrl: './inicioflujo.component.html',
  styleUrls: ['./inicioflujo.component.css']
})
export class InicioflujoComponent implements OnInit, OnDestroy {

  tagSusbcribe: Subscription;
  tags: any[];
  pageActual: number = 1;
  arrayTagsFlujo: any[] = [];
  arrayTagsVerflujo: any[] = [];
  

  //variables modal
  formCrearFlujo: boolean = false;
  formTags: boolean = false;



  segmentosTags: string = 'Tags';
  inicioFlujoSms: boolean = false;


  divSmsJerarquia1: boolean = false;
  formSms: boolean = false;
  valorSmsDe: string;
  contenidoMensaje: string;


  constructor(private Servicio: ServiceAllService) { }

  ngOnInit() {
    this.getTags();
  }



  crearFlujo(tipoFormModal) {
    if (tipoFormModal == 1) {
      this.formCrearFlujo = true;
      this.formTags = false;
    } else {
      this.formCrearFlujo = false;
      this.formTags = true;
    }
  }

  guardarFlujo() {
    //enviar al servicio
    this.inicioFlujo();
  }




  inicioFlujo() {
    this.inicioFlujoSms = true;

  }





  borrarInicioFlujoSms() {
    this.inicioFlujoSms = false
  }


  verDivSms() {
    this.divSmsJerarquia1 = true
  }



  verFormContenidoCodigo(evento){
    this.formSms = evento;
  }


  valorDe(event){
    this.valorSmsDe = event.target.value
  }




  getTags() {
    this.tagSusbcribe = this.Servicio.getTags().subscribe(
      (res: any) => {
        this.tags = res;
      },
      (err) => {
        console.log(err)
      }
    )
  }


  agregar(data: any) {
    this.segmentosTags = ''
    this.arrayTagsFlujo.push({ name: data.nombre_tag });

  }

  quitar(data: any) {
    this.arrayTagsFlujo = this.arrayTagsFlujo.filter((s) => {
      if (s.name == data.nombre_tag) {
        return false;
      } else {
        return true;
      }
    });

  }


  limpiarArray() {
    console.log(this.arrayTagsFlujo)
    this.arrayTagsFlujo = [];

  }



  ngOnDestroy() {
    this.tagSusbcribe.unsubscribe();
  }
}
