import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }
  async handleSubmit(form: any) {
    await fetch('https://myappchk.herokuapp.com/login', {
       method: 'post', 
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(form.value)
     })
   }
  ngOnInit(): void {
  }
onClick= ()=>{
  alert('you are logged in')
}
}
