import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';

@Component({
  selector: 'app-mensaje-sms',
  templateUrl: './mensaje-sms.component.html',
  styleUrls: ['./mensaje-sms.component.css']
})
export class MensajeSmsComponent implements OnInit {

  codigosDe: any[];
  codigode: string = '';
  contenidoMensaje: string = '';
  @Output() public borrarSms = new EventEmitter<boolean>();

  constructor(private servicios: ServiceAllService) { }

  ngOnInit() {
   
  }

  clickMensajeSms(){

  }

  
}
  