import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-usuario',
  templateUrl: './layout-usuario.component.html',
  styleUrls: ['./layout-usuario.component.css']
})
export class LayoutUsuarioComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("arraytags");
    this.route.navigate(['/'])

  }
}
