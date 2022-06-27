import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  title='Reactive Form'
loginForm=new FormGroup({
  user:new FormControl(''),
  password:new FormControl(''), 
})
  constructor() { }

  ngOnInit(): void {
  }

}
