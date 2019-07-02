import { Component, OnInit } from '@angular/core';
import { TopNewsService } from '../../Services/top-news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  topNews :any[];

  constructor(private service:TopNewsService) { }

  ngOnInit() {
    this.service.GetAll().subscribe(res=>{
      this.topNews=res as any[];
    })
  }

}
