import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from 'src/app/services/service-all.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tags-home',
  templateUrl: './tags-home.component.html',
  styleUrls: ['./tags-home.component.css']
})
export class TagsHomeComponent implements OnInit {

  tags: any;
  miDataInterior = [];
  bcrearcomun: boolean = false
  filterTags:any
  nombreTag: string;

  constructor(private Servicio: ServiceAllService, private router: Router,private toastrService: ToastrService) { }

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.Servicio.getTags().subscribe(
      (res)=>{
        this.tags = res;  
      },
      (err)=>{
        console.log(err)
      }
      )
  }

  agregar(data: any) {
    var name = {
      id: data.id,
      name: data.nombre_tag
    }
    this.miDataInterior.push(name);
    this.bcrearcomun = true;   
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


  saveTags(){
    localStorage.setItem('arraytags',JSON.stringify(this.miDataInterior))
    this.router.navigate(['/usuario/tags/createComunicacionTags']);
  }

  guardarTag(){
    this.Servicio.crearTag({ name: this.nombreTag}).subscribe(
      (res:any)=>{ 
        this.toastrService.success('creado satisfactoriamente', 'tag', {
          timeOut: 1500, positionClass: 'toast-top-right', progressBar: true, progressAnimation: 'decreasing'
        });    
        this.getTags()
      },
      (err)=>{
        console.log('no creado erro', err)
      }
    )

  }

}
