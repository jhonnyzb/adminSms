import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicioflujo',
  templateUrl: './inicioflujo.component.html',
  styleUrls: ['./inicioflujo.component.css']
})
export class InicioflujoComponent implements OnInit {

  segmentosTags: string = 'Segmentos o tags';
  unicaAudiencia: boolean = false;
  entradaSms: boolean = false;
  eventosPersonas: boolean = false;
  mensajeSmsAudienciaUnica: boolean = false;
  mensajeSmsEntradaSms: boolean = false;
  mensajeSmsEventosPersonas: boolean = false;


  constructor() { }

  ngOnInit() {
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
    this.unicaAudiencia = false;
    this.mensajeSmsAudienciaUnica = false;
  }

  borrarEntradaSms(){
    this.entradaSms = false;
  }

  borrarEventosPersonas(){
    this.eventosPersonas = false;
  }



  clickMensajeSms(id: number){
    if (id === 1) {
      this.mensajeSmsAudienciaUnica = true
    }
    if (id === 2) {
      this.mensajeSmsEntradaSms = true;
    }
    if (id === 3) {
      this.mensajeSmsEventosPersonas = true
    }
  
  }

  clickSmsHijo(event: boolean){
      this.mensajeSmsAudienciaUnica = event;
  }
}
