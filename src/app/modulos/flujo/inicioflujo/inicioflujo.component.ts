import { Component, OnInit, ɵConsole, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceAllService } from 'src/app/services/service-all.service';

@Component({
  selector: 'app-inicioflujo',
  templateUrl: './inicioflujo.component.html',
  styleUrls: ['./inicioflujo.component.css']
})
export class InicioflujoComponent implements OnInit, OnDestroy{

  tagSusbcribe: Subscription;
  tags: any[];
  pageActual: number = 1;
  arrayTagsFlujo: any[]= [];
  arrayTagsVerflujo: any[] = [];
 

  segmentosTags: string = 'Tags';
  unicaAudiencia: boolean = false;
  entradaSms: boolean = false;
  eventosPersonas: boolean = false;



  mensajeSmsAudienciaUnica: boolean = false;
  mensajeSmsEntradaSms: boolean = false;
  mensajeSmsEventosPersonas: boolean = false;

  mensajeSmsAudienciaUnica1: boolean = false;
  mensajeSmsEntradaSms1: boolean = false;
  mensajeSmsEventosPersonas1: boolean = false;



  mensajeWhatsappAudienciaUnica: boolean = false;
  mensajeWhatsappEntradaSms: boolean = false;
  mensajeWhatsappEventosPersonas: boolean = false;

  mensajeWhatsappAudienciaUnica1: boolean = false;
  mensajeWhatsappEntradaSms1: boolean = false;
  mensajeWhatsappEventosPersonas1: boolean = false;


  constructor(private Servicio: ServiceAllService) { }

  ngOnInit() {
    this.getTags();
  }


  clickUnicaAudiencia(){
    this.unicaAudiencia = true;

  }
  clickEntradaSms(){
    this.entradaSms = true;
  }

  clickEventoPersonas(){
   
    this.eventosPersonas = true;
  }


  

  borrarUnicaAudiencia(){ 
    this.mensajeSmsAudienciaUnica1 = false;
    this.mensajeSmsAudienciaUnica = false;
    this.unicaAudiencia = false; 
  }

  borrarEntradaSms(){
    this.entradaSms = false;
    this.mensajeSmsEntradaSms = false;
    this.mensajeSmsEntradaSms1 = false;
  }

  borrarEventosPersonas(){
    this.eventosPersonas = false;
    this.mensajeSmsEventosPersonas = false
    this.mensajeSmsEventosPersonas1 = false
  }



  clickMensajeSms(id: number){
    if (id === 1) {
      this.mensajeSmsAudienciaUnica = true
      this.mensajeWhatsappAudienciaUnica = false
    }
    if (id === 2) {
      this.mensajeSmsEntradaSms = true;
      this.mensajeWhatsappEntradaSms = false
    }
    if (id === 3) {
      this.mensajeSmsEventosPersonas = true
      this.mensajeWhatsappEventosPersonas = false
    }
  
  }

  clickMensajeWhatsapp(id:number){
    if (id === 1) {
      this.mensajeWhatsappAudienciaUnica = true
      this.mensajeSmsAudienciaUnica = false
    }
    if (id === 2) {
      this.mensajeWhatsappEntradaSms = true;
      this.mensajeSmsEntradaSms = false;
    }
    if (id === 3) {
      this.mensajeWhatsappEventosPersonas = true
      this.mensajeSmsEventosPersonas = false
    }
  }



  clickSmsHijo(event: any){
    console.log(event)

    if (event.tipo === 1) {
      if (event.ideSmsUnica === 'smsUnica') {
        this.mensajeSmsAudienciaUnica = event.borrar;
      }
      if (event.ideSmsUnica === 'smsUnica1') {
        this.mensajeSmsAudienciaUnica1 = event.borrar;
      }
      if (event.ideSmsUnica === 'smsEntrada') {
        this.mensajeSmsEntradaSms= event.borrar;
      }
      if (event.ideSmsUnica === 'smsEntrada1') {
        this.mensajeSmsEntradaSms1= event.borrar;
      }
      if (event.ideSmsUnica === 'smsEventos') {
        this.mensajeSmsEventosPersonas= event.borrar;
      }
      if (event.ideSmsUnica === 'smsEventos1') {
        this.mensajeSmsEventosPersonas1= event.borrar;
      }
    }

    if (event.tipo === 2) {
      
      if (event.ideSmsUnica === 'smsUnica') {
        this.mensajeSmsAudienciaUnica1 = event.crearSms;
      }
      if (event.ideSmsUnica === 'smsEntrada') {
        this.mensajeSmsEntradaSms1= event.crearSms;
      }
      if (event.ideSmsUnica === 'smsEventos') {
        this.mensajeSmsEventosPersonas1= event.crearSms;
      }
      
    }   
  }

  getTags() {
    this.tagSusbcribe =  this.Servicio.getTags().subscribe(
      (res:any)=>{
        this.tags = res;  
      },
      (err)=>{
        console.log(err)
      }
      )
  }


  agregar(data: any) {
    this.arrayTagsFlujo.push({name: data.nombre_tag});  
   
  }

  quitar(data:any) {
    this.arrayTagsFlujo = this.arrayTagsFlujo.filter((s)=>{
      if(s.name == data.nombre_tag){
        return false;
      }else{
        return true;
      }
    });

  }


  limpiarArray(){
    console.log(this.arrayTagsFlujo)
    this.arrayTagsFlujo = [];
   
  }



  ngOnDestroy(){
    this.tagSusbcribe.unsubscribe();
  }
}
