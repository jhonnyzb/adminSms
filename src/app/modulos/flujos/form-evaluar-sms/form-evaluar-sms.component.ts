import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-evaluar-sms',
  templateUrl: './form-evaluar-sms.component.html',
  styleUrls: ['./form-evaluar-sms.component.css']
})
export class FormEvaluarSmsComponent implements OnInit, OnDestroy {

  icon:string=''
  name:string=''
  opciones: any[];
  dataOpcionesSubscription: Subscription;

  constructor(private router: Router, private Servicio: ServiceAllService, ) { 

    this.dataOpcionesSubscription = this.router.events.pipe(
      filter(eve  => eve instanceof ActivationEnd),
      filter((eve:ActivationEnd)=> eve.snapshot.firstChild === null),
      map((eve:ActivationEnd)=>eve.snapshot.data)
    ).subscribe(res=>{
       this.icon =res.icon;
       this.name = res.name
    })
  }

  ngOnInit() {
    this.getOpciones();
  }

getOpciones(){
this.opciones = this.Servicio.dataOpciones();
}

ngOnDestroy(){
this.dataOpcionesSubscription.unsubscribe()
}

}
