import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ServiceAllService } from 'src/app/services/service-all.service';


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
  tags: any;
  NumeroTags:number;
  miDataInterior = [];
  bander: boolean;
  codigo: string = '';
  contenido: string= '';
  

  constructor( private router: Router,private Servicio: ServiceAllService) { 
   
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
    this.getTags();
   
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


  getTags() {
    this.Servicio.getTags().subscribe(
      (res)=>{
        this.tags = res;
        this.NumeroTags = this.tags.length;     
      },
      (err)=>{
        console.log(err)
      }
      )
  }


  agregar(data: any) {
    var name = {
      "name": data.nombre_tag
    }
    this.miDataInterior.push(name);  
  }

  quitar(data:any) {
    this.miDataInterior = this.miDataInterior.filter((s)=>{
      if(s.name == data.nombre_tag){
        return false;
      }else{
        return true;
      }
    });

  }

  changeCodigo(e: any) {
    this.codigo = e.target.value;
    
  }


  limpiarArray(){
    this.miDataInterior = [];
    this.bander = false;
  }


  send(){
    let mensajeFlujo = {
      tags: this.miDataInterior,
      de: this.codigo,
      contenido: this.contenido,   
    }

  }
}
