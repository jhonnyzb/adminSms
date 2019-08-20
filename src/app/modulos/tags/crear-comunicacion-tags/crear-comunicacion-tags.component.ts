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
  arrayTags:any;
  formularioComuMasiva: FormGroup;
  datarecibida: any;
  
  constructor(private Formbuilder: FormBuilder, private Servicio: ServiceAllService) { }

  ngOnInit() {
    this.buildForm();
    this.getTag();
  }

  private buildForm() {

    this.formularioComuMasiva = this.Formbuilder.group(
      {
        de: ['', Validators.required],
        contenido: ['',Validators.required]
      }
    )
  }


  getTag(){
   this.arrayTags = JSON.parse(localStorage.getItem("arraytags"))
   console.log(this.arrayTags.id)
 
  }

  SendComunicacionMasivo(form: any){
    
    for (var i = 0; i < this.arrayTags.length; i++) {
      var name = {
        "id": this.arrayTags[i].id 
      }

    this.arrayenvio.push(name);   
    }
      let ComMasiva = {
        id: this.arrayTags[0].id,
        message: form.value.contenido,
      }
      console.log(ComMasiva)
      this.Servicio.addComunicacion(ComMasiva).subscribe(
        (res:any)=>{
          if(res.CodigoRespuesta > 0){

          }else{
              let envio ={
                from: form.value.de,
                tags: this.arrayenvio
              }
              console.log(envio)
            this.Servicio.envioMensaje(envio).subscribe(
              (res)=>{
                this.datarecibida = res;
                console.log(this.datarecibida);
              },
              (err)=>{
                console.log(err)
              }
              )
          }
          console.log(res);
        },(err)=>{
          console.log(err)
        }
      )


  }


}
