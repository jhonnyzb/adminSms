import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mensaje-sms',
  templateUrl: './mensaje-sms.component.html',
  styleUrls: ['./mensaje-sms.component.css']
})
export class MensajeSmsComponent implements OnInit {

  codigosDe: any[];
  codigode: string = '';
  contenidoMensaje: string = 'Texto';
  
  @Input() valorDe: string;
  @Output() public formContenidoCodigo = new EventEmitter<any>();

  

  constructor(private servicios: ServiceAllService) { }

  ngOnInit() {
   
  }



  lanzarFormContenidoCodigo(){
      let formVer = true
      this.formContenidoCodigo.emit(true)
  }
  
  

}
  