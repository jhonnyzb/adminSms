import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';

@Component({
  selector: 'app-mensaje-sms',
  templateUrl: './mensaje-sms.component.html',
  styleUrls: ['./mensaje-sms.component.css']
})
export class MensajeSmsComponent implements OnInit {

  codigosDe: any[];
  codigode: string = '';
  contenidoMensaje: string = 'Texto';
  
  @Input() ideSmsUnica: string;


  @Output() public eventoSms = new EventEmitter<any>();

  constructor(private servicios: ServiceAllService) { }

  ngOnInit() {
   
  }

  clickMensajeSms(){

  }

  eventoSMS(id:number){

    if (id === 1) {
      let infoSms = {
        tipo: id,
        borrar: false,
        ideSmsUnica: this.ideSmsUnica,
        de : this.codigode,
        contenidomensaje: this.contenidoMensaje
      }
      this.eventoSms.emit(infoSms)
    }

    if (id === 2) {
      let infoSms = {
        tipo: id,
        crearSms: true,
        ideSmsUnica: this.ideSmsUnica,
        de : this.codigode,
        contenidomensaje: this.contenidoMensaje
      }
      this.eventoSms.emit(infoSms)
    }
    if (id===3) {
      let infoSms = {
        tipo: id,
        crearWhatsApp: true,
        ideSmsUnica: this.ideSmsUnica,
        de : this.codigode,
        contenidomensaje: this.contenidoMensaje
      }
      this.eventoSms.emit(infoSms)
    }
    if (id===4) {
      let infoSms = {
        tipo: id,
        crearEvaluarSms: true,
        ideSmsUnica: this.ideSmsUnica,
        de : this.codigode,
        contenidomensaje: this.contenidoMensaje
      }
      this.eventoSms.emit(infoSms)
    }
   

  }

  
}
  