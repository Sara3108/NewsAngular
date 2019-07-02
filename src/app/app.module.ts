import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './Components/nav/nav.component';
import { DataService } from './Services/data.service';
import { FavourateComponent } from './Components/favourate/favourate.component';
import { TopNewsComponent } from './Components/top-news/top-news.component';
import { ViewAreaComponent } from './Components/view-area/view-area.component';
import { RouterModule } from '@angular/router';
import { SummaryPipe, DeletePipe } from './Pipes/summary.pipe';
import { DepartmentsComponent } from './Components/departments/departments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FavourateComponent,
    TopNewsComponent,
    ViewAreaComponent,
    DepartmentsComponent,
    SummaryPipe,
    DeletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'item/:ID', component:ViewAreaComponent},
      {path:'Departments/ID',component:DepartmentsComponent}
      
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
