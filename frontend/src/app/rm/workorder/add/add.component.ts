import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { AddworkService } from './addwork.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers : [AddworkService]
})
export class AddComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(public addService: AddworkService) { }

  ngOnInit(): void {
  }
  onSubmit (form : NgForm){
    this.addService.postWork(form.value).subscribe(
     res =>{
       this.showSucessMessage = true;
       setTimeout(()=> this.showSucessMessage = false,2000)
     },
     err =>{}

    )
  }

}
