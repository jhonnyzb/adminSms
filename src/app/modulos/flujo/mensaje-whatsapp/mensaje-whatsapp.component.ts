import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-whatsapp',
  templateUrl: './mensaje-whatsapp.component.html',
  styleUrls: ['./mensaje-whatsapp.component.css']
})
export class MensajeWhatsappComponent implements OnInit {

  codigode:string='';
  contenidoMensaje: string='';
  constructor() { }

  ngOnInit() {
  }

}
