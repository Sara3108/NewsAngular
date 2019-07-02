import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../Services/department.service';
import { ActivatedRoute } from '@angular/router';
import { department } from './news';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  id;
  n:department[];
  filter:department[];


  constructor(private service :DepartmentService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.id=+param.get('ID');
      this.news();
    })

  }
  news(){
    this.service.GetAll().subscribe(res=>{
      this.n=res as department[];
      this.n.forEach(a=>{
        if(a.ID==this.id){  
          this.filter.push(a);
        }

      })
   
    })
  }

}
