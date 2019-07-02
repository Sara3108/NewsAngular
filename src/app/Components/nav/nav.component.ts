import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { HttpClient } from '@angular/common/http';
import { NavService } from '../../Services/nav.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nav :any[];
  constructor(private http:NavService) { }

  ngOnInit() {
    this.http.GetAll().subscribe(res=>{
      this.nav= res as any[];
      this.nav= this.nav.filter(r=>r.ShowInMainMenu==true)
      console.log(this.nav);
    })
  }

}
