import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  
  constructor() { }
  async handleSubmit(form: any) {
    console.log(form.value)
   await fetch('https://myappchk.herokuapp.com/signup', {
      method: 'post', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form.value)
    })
  }
  ngOnInit(): void {
  }

}
