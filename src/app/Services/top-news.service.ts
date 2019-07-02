import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService extends DataService {

  constructor(http:HttpClient) { super('http://api.mohamed-sadek.com/News/TopNews',http)}
}
