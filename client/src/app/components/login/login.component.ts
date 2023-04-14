import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Md5} from 'ts-md5';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public md5 = new Md5();
  loginForm: FormGroup;
  constructor(
    public loginService: LoginService,
  ) {
    this.loginForm = new FormGroup({
      cpf: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this._v());

      this.loginService.signIn(this.loginForm.get('cpf')?.value, this.md5.appendStr(this.loginForm.get('password')?.value).end()?.toString())
    }


  }
  _v() {
    return this.loginForm.value;
  }
}
