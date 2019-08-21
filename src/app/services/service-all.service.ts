import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAllService {

  people = [];
  constructor(private http: HttpClient) { }
  
  
  //Metodo servicio login
  login(email: string, pass: string) {
    let usuario = {
      email: email,
      password: pass
    }
    return this.http.post('http://10.133.10.175/auth/login', usuario);
  }

  getCountry(){
    return this.http.get('http://10.133.10.175/admin/pais/getPaises',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    })
  }


  subirImport(peopleImport: any) {

    return this.http.post('http://10.133.10.175/admin/persona/agregarMasivo', peopleImport, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    })

  }

  getTags() {
    return this.http.get('http://10.133.10.175/admin/tags/listar', {
     headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
   });   
   }


   saveRegister(usuario: any) {
    return this.http.post('http://10.133.10.175/admin/persona/agregar', usuario,   {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    });
  }

  addComunicacion(comunicacion:any){
    return this.http.post('http://10.133.10.175/admin/tags/actualizarMensaje',comunicacion,{ 
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
  })
}

envioMensaje(envio){
  return this.http.post('http://10.133.10.175/admin/temp/sms/enviar', envio, { 
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
  })
}

dataOpciones(){
  let opciones = 
  [ 
    {
      icon:'comment',
      name: 'Enviar Mensaje SMS',
      route: 'formsms'
    },
    {
      icon:'mobile',
      name: 'Evaluar Mensaje SMS',
      route: 'formevasms'
    },
    {
      icon:'whatsapp',
      name: 'Enviar Mensaje WhatsApp',
      route: ''
    },
    {
      icon:'volume-control-phone',
      name: 'Iniciar llamada',
      route: ''
    },
    {
      icon:'times',
      name: 'Fin del flujo',
      route: ''
    },
  ]

  return opciones;
}

}
