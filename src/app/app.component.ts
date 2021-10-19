import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="crud";
  mydata:any[]=[];
  constructor(private crudService: CrudService) {}
  myPost(data:NgForm){
    console.log(data);
    this.crudService.store(data).subscribe()
  }
}
