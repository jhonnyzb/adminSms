import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit, OnDestroy {

 

  bander: boolean;
  formularioRegister: FormGroup;
  minlength: number = 10;
  tags: any;
  NumeroTags:number;
  miDataInterior = [];
  paises: any;
  pais: string = '44';
  Contac: any;
  idtag: number;
  arrayAtributos: any[]= [];
  formAtributosVer: boolean = false;
  

  tagSusbcribe: Subscription;
  registerSusbcribe:Subscription;
  paisSusbcribe: Subscription;

  constructor(private Formbuilder: FormBuilder, private Servicio: ServiceAllService,private toastrService: ToastrService) { }

  ngOnInit() {
    this.buildForm();
    this.getTags();
    this.getPais();
  }

  private buildForm() {

    this.formularioRegister = this.Formbuilder.group(
      {
        name: ['', Validators.required],
        telefono: ['', [Validators.required, Validators.minLength(this.minlength), Validators.pattern(/^[0-9]+$/)]],
        mail: ['', [Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]],
        atributo:[''],
        valor:[]
      }
    )
  }

  getTags() {
    this.tagSusbcribe =  this.Servicio.getTags().subscribe(
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

  getPais(){

    this.paisSusbcribe = this.Servicio.getCountry().subscribe(
      (res)=>{
          this.paises = res;
      },
      (err)=>{
        console.log(err)
      })

  }


  limpiarArray(){
    this.miDataInterior = [];
    this.bander = false;
  }

  changePais(e: any) {
    this.pais = e.target.value;
  }


  formularioAtributos(form: any){
    let atributos = {
      nombre: form.value.atributo,
      valor: form.value.valor
    }
    this.arrayAtributos.push(atributos)
    console.log(this.arrayAtributos)
    let atribu = this.formularioRegister.get('atributo')
    let valor = this.formularioRegister.get('valor')
    atribu.reset();
    valor.reset();
  }


  guardarRegister(form:any){
    let usuario = {
      name: form.value.name,
      countryId: this.pais,
      phone: form.value.telefono,
      tags: this.miDataInterior,
      email: form.value.mail,
      attributeArray: this.arrayAtributos 
    }
    console.log(usuario)
    this.registerSusbcribe = this.Servicio.saveRegister(usuario).subscribe(
      (res:any)=>{
        console.log(res)
        this.Contac = res.persona.numero_telefono;
        this.idtag = res.tags[0].id;
        this.limpiarArray();
        this.toastrService.success('Guardado con exito', 'Registro', {
          timeOut: 1500, positionClass: 'toast-bottom-center', progressBar: true, progressAnimation: 'decreasing'
        });
      },
      (err)=>{
        console.log(err)
        this.toastrService.error('En la conexion con base de datos', 'Error', {
          timeOut: 1500, positionClass: 'toast-bottom-center', progressBar: true, progressAnimation: 'decreasing'
        });

      }
    )   
  }



  formAtributos(){
    if (this.formAtributosVer == true) {
      this.formAtributosVer = false;
    }else{
      this.formAtributosVer = true
    }
   
   }


   eliminarAtributo(indiceAtributo: any){
    this.arrayAtributos.splice(indiceAtributo, 1)
   }

   eliminarAtributosTodo(){
     this.arrayAtributos = [];
   }

  //Metodo deteccion error  formulario Login input userName y Password 
  public getError(controlName: string): boolean {
    let error = false;
    if (controlName == 'name') {
      const control = this.formularioRegister.get(controlName);
      if (control.touched && control.errors != null) {
        error = true
      }
    } else {
      const control = this.formularioRegister.get(controlName);
      if (control.touched && control.errors != null) {
        error = true
      }

    }
    return error;
  }



  ngOnDestroy(){
    this.tagSusbcribe.unsubscribe();
    this.paisSusbcribe.unsubscribe();
    if(this.registerSusbcribe){
      this.registerSusbcribe.unsubscribe();
    }
  }
}
