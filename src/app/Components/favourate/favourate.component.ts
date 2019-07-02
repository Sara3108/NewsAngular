import { Component, OnInit } from '@angular/core';
import { FavourateService } from '../../Services/favourate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourate',
  templateUrl: './favourate.component.html',
  styleUrls: ['./favourate.component.css']
})
export class FavourateComponent implements OnInit {

  fav : any[];
  new;
  constructor(private service:FavourateService, private router:Router) { }

  ngOnInit() {
    this.service.GetAll().subscribe(res=>{
      this.fav=res as any[];
    },error=>{
      alert('an exeption occured');
    })
  }

// navigate(){
//   this.router.navigate([''])
// }

}
