import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-flujos-comunicacion',
  templateUrl: './header-flujos-comunicacion.component.html',
  styleUrls: ['./header-flujos-comunicacion.component.css']
})
export class HeaderFlujosComunicacionComponent implements OnInit, OnDestroy {

  opciones: any[];
  
  filterOpciones: string = '';
  
  bandera: number= 1;
  tabs: any[] = [{paso: 'paso '+ this.bandera}];

  constructor(private Servicios: ServiceAllService, private route: Router)  { }

  ngOnInit() {
    this.getDataOpciones(); 
  }


  formSms() {

  }

  getDataOpciones() {
    this.opciones = this.Servicios.dataOpciones();
  }




  addTabs(){
    this.bandera = this.bandera + 1;
    let tab = { paso: 'paso '+ this.bandera}
    this.tabs.push(tab);
    this.route.navigate(['/usuario/flow'])

  }

  

  ngOnDestroy(){
    
  }
}
