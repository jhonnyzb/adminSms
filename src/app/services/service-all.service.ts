import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceAllService {

  
  baseUrl: string = environment.urlApi;

  constructor(private http: HttpClient) { }


  //Metodo servicio login
  login(email: string, pass: string) {
    let usuario = {
      email: email,
      password: pass
    }
    return this.http.post(this.baseUrl + '/auth/login', usuario);
  }

  getCountry() {
    return this.http.get(this.baseUrl + '/admin/pais/getPaises', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    })
  }

  obtenerAtributos(arrayTags:any){
    return this.http.post(this.baseUrl + '/admin/atributos/ListarAtributosPersonasTags', arrayTags, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    })
  }

  subirImport(peopleImport: any) {

    return this.http.post(this.baseUrl + '/admin/persona/agregarMasivo', peopleImport, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    })

  }

  getTags() {
    return this.http.get(this.baseUrl + '/admin/tags/listarPorUsuario', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    });
  }


  saveRegister(usuario: any) {
    return this.http.post(this.baseUrl + '/admin/persona/agregar', usuario, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    });
  }

  addComunicacion(comunicacion: any) {
    return this.http.post(this.baseUrl + '/admin/tags/actualizarMensaje', comunicacion, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    })
  }

  envioMensaje(envio) {
    return this.http.post(this.baseUrl + '/admin/temp/sms/enviarMensajesMultiples', envio, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    })
  }

  crearTag(tag) {
    return this.http.post(this.baseUrl + '/admin/tags/createTag', tag, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    })
  }



  dataOpciones() {
    let opciones =
      [
        {
          icon: 'comment',
          name: 'Enviar Mensaje SMS',
          route: 'formsms'
        },
        {
          icon: 'comment',
          name: 'Mensaje Sms respuesta',
          route: 'formsmsres'
        },
        {
          icon: 'mobile',
          name: 'Evaluar Mensaje SMS',
          route: 'formevasms'
        },
        {
          icon: 'whatsapp',
          name: 'Enviar Mensaje WhatsApp',
          route: ''
        },
        {
          icon: 'volume-control-phone',
          name: 'Iniciar llamada',
          route: ''
        },
        {
          icon: 'times',
          name: 'Fin del flujo',
          route: ''
        }
      ]

    return opciones;
  }

 
  



}
