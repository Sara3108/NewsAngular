import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../Services/view.service';
import { ActivatedRoute } from '@angular/router';
import { News } from './news';

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.css']
})
export class ViewAreaComponent implements OnInit {

  id:number;  
  n:News;
  x:any;
  clicked:boolean=false;
  loaded:boolean= false;
  constructor(private service:ViewService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.id =+param.get('ID');
      console.log(this.id);
      this.test();
    })
    
   
  //  console.log(this.n); 
  //  console.log(this.id);
  }
  test(){
    this.service.GetById(this.id).subscribe(res=>{
      this.n = res as News ;
      this.clicked=false;
      this.loaded = true;
     //console.log(this.n); 
    })
  }


}
