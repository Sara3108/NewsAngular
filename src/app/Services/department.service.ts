import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends DataService{

  constructor(http :HttpClient) {super('http://api.mohamed-sadek.com/News/Departments/',http) }
  
}
