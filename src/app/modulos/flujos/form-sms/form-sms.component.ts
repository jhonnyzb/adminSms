import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-form-sms',
  templateUrl: './form-sms.component.html',
  styleUrls: ['./form-sms.component.css']
})
export class FormSmsComponent implements OnInit {

  contador: number = 0;
  mensajes: number = 1;
  icon:string=''
  name:string=''
  constructor( private router: Router) { 
   
    this.router.events.pipe(
     filter(eve  => eve instanceof ActivationEnd),
     filter((eve:ActivationEnd)=> eve.snapshot.firstChild === null),
     map((eve:ActivationEnd)=>eve.snapshot.data)
   ).subscribe(res=>{
      this.icon =res.icon;
      this.name = res.name
   })
  }

  ngOnInit() {
  }

  onKey(event) {
    this.contador = event.target.value.length;
    if (this.contador <= 160) {
      this.mensajes = 1
    } else if (this.contador <= 320) {
      this.mensajes = 2
    } else if (this.contador <= 480) {
      this.mensajes = 3
    }else if (this.contador <= 640) {
      this.mensajes = 4
    }else if (this.contador <= 800) {
      this.mensajes = 5
    }else if (this.contador <= 960) {
      this.mensajes = 6
    }
    else if (this.contador <= 1120) {
      this.mensajes = 7
    }
  }
}
