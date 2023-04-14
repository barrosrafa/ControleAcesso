import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import random from 'random';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-second-validation',
  templateUrl: './second-validation.component.html',
  styleUrls: ['./second-validation.component.css']
})
export class SecondValidationComponent implements OnInit {
  public hiddenDay = false
  public hiddenMonth = false
  public hiddenYear = false

  constructor(
    private loginService: LoginService
  ) {
    this.secondForm = new FormGroup({
      dia: new FormControl(''),
      mes: new FormControl(''),
      ano: new FormControl(''),
    });
   }

  secondForm: FormGroup;
  onSubmit() {
    console.log(this.secondForm.get('dia')?.value)
    console.log(this.secondForm.get('mes')?.value)
    console.log(this.secondForm.get('ano')?.value)



    console.log(this.loginService.getBirthdayDay())
    console.log(this.loginService.getBirthdayMonth())
    console.log(this.loginService.getBirthdayYear())
  }

  ngOnInit(): void {
    let num = random.int((0), (2))

    if(num == 0) {
      this.hiddenDay = true
    } else if ( num === 1) {
      this.hiddenMonth = true
    } else if ( num === 2) {
      this.hiddenYear = true
    }
  }

}
