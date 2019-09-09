import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-home',
  templateUrl: './registro-home.component.html',
  styleUrls: ['./registro-home.component.css']
})
export class RegistroHomeComponent implements OnInit {
  formularioImpor: FormGroup;
  pais: string = '';
  people: any[];
  total: number;
  pageActual: number = 1;
  filterPeople: string = '';
  nameArchivoCsv: string= 'Ningun archivo seleccionado';
  validatefileUpload: string = '';
  archivoSubir: any;
  paises: any;
  peopleMasivo: any;
  ArchivoVacio: boolean = false;
  extensionArhivo: boolean = false;
  
  
  constructor(private Servicio: ServiceAllService,private Formbuilder: FormBuilder) { }

  ngOnInit() {
    //this.getDataPeopleMasivo();
    this.buildForm();
    this.getPais();
  }


  private buildForm() {

    this.formularioImpor = this.Formbuilder.group(
      {
        tag: ['', Validators.required],
        delimitador: ['',[Validators.required,Validators.pattern(/^[,;]+$/),Validators.maxLength(1)]]
      }
    )
  }


  onFileChange(event){
    this.ArchivoVacio = true;
    const file = event.target.files[0];
    const extension = file.type.split('/')[1].toLowerCase();
    if (extension !== 'csv' && extension !== 'vnd.ms-excel'){
      event.target.value = '';
      this.nameArchivoCsv = file.name;
      this.extensionArhivo = false;
      this.validatefileUpload = '*Formato no valido';
     }else{
      this.extensionArhivo = true;
      this.nameArchivoCsv = file.name;
      this.getBase64(file).then(
        (res)=>{
          this.archivoSubir = res;
        }).catch(
          (err)=>{
            console.log('Cargando archivo');
          }
        )
        this.validatefileUpload = '';
     }
  }

  getPais(){

    this.Servicio.getCountry().subscribe(
      (res:any)=>{
          this.paises = res;
      },
      (err)=>{
        console.log(err)
      })

  }

  changepais(e: any) {
    this.pais = e.target.value

  }

  sendImport(form: any) {
    let fil =  this.archivoSubir.split(',');
    let peopleImport = {
      countryId: this.pais,
      tags: [{ "name":form.value.tag }],
      file: fil[1],
      delimiter:form.value.delimitador
    }
    console.log(peopleImport)
    this.Servicio.subirImport(peopleImport).subscribe(
      (res:any)=>{
        this.peopleMasivo = res.personas
      },
      (err)=>{
        console.log(err)
      }
    )
   
  }

  limpiarForm(){
    this.formularioImpor.reset();
    this.validatefileUpload = '';
    this.nameArchivoCsv = 'Ningun Archivo seleccionado'
    this.extensionArhivo = false;
  
  }



  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(
        reader.result
      );
      reader.onerror = error => reject(
        error
      );
    });
  }


  
 
  public getError(controlName: string): boolean {
    let error = false;
    if (controlName == 'delimitador') {
      const control = this.formularioImpor.get(controlName);
      if (control.touched && control.errors != null) {
        error = true
      }
    } else {
      const control = this.formularioImpor.get(controlName);
      if (control.touched && control.errors != null) {
        error = true
      }

    }
    return error;
  }

}
