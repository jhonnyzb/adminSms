import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceAllService } from 'src/app/services/service-all.service';

@Component({
  selector: 'app-crear-comunicacion-tags',
  templateUrl: './crear-comunicacion-tags.component.html',
  styleUrls: ['./crear-comunicacion-tags.component.css']
})
export class CrearComunicacionTagsComponent implements OnInit {
  arrayenvio = [];
  arrayTags: any;
  formularioComuMasiva: FormGroup;
  datarecibida: any;
  contador: number = 0;
  mensajes: number = 1;

  constructor(private Formbuilder: FormBuilder, private Servicio: ServiceAllService) { }

  ngOnInit() {
    this.buildForm();
    this.getTag();
  }

  private buildForm() {

    this.formularioComuMasiva = this.Formbuilder.group(
      {
        de: ['', Validators.required],
        contenido: ['', Validators.required]
      }
    )
  }


  getTag() {
    this.arrayTags = JSON.parse(localStorage.getItem("arraytags"))
    console.log(this.arrayTags.id)

  }

  SendComunicacionMasivo(form: any) {

    for (var i = 0; i < this.arrayTags.length; i++) {
      var name = {
        "id": this.arrayTags[i].id
      }
    }
    this.arrayenvio.push(name);
    let envio = {
      from: form.value.de,
      tags: this.arrayenvio,
      texto: form.value.contenido,
      numero_atributos: 1
    }
    console.log(envio)
    this.Servicio.envioMensaje(envio).subscribe(
      (res) => {
        this.datarecibida = res;
        console.log(this.datarecibida);
      },
      (err) => {
        console.log(err);
      }
    )
  }


  onKey(event) {
    this.contador = event.target.value.length;
    if (this.contador <= 160) {
      this.mensajes = 1
    } else if (this.contador <= 320) {
      this.mensajes = 2
    } else if (this.contador <= 480) {
      this.mensajes = 3
    } else if (this.contador <= 640) {
      this.mensajes = 4
    } else if (this.contador <= 800) {
      this.mensajes = 5
    } else if (this.contador <= 960) {
      this.mensajes = 6
    }
    else if (this.contador <= 1120) {
      this.mensajes = 7
    }
  }


}
