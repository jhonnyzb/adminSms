import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';

@Component({
  selector: 'app-header-flujos-comunicacion',
  templateUrl: './header-flujos-comunicacion.component.html',
  styleUrls: ['./header-flujos-comunicacion.component.css']
})
export class HeaderFlujosComunicacionComponent implements OnInit {

  opciones: any[];
  constructor(private Servicios: ServiceAllService) { }

  ngOnInit() {
    this.getDataOpciones();
  }


  formSms() {

  }

  getDataOpciones() {
    this.opciones = this.Servicios.dataOpciones();
  }

}
