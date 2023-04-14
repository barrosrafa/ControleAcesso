import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../models/cliente.model';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public client: any;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) { }

  public getBirthdayDay() {
    return this.client[0].dtnasc.split("-")[2];
  }

  public getBirthdayMonth() {
    return this.client[0].dtnasc.split("-")[1];
  }

  public getBirthdayYear() {
    return this.client[0].dtnasc.split("-")[0];
  }

  private get(cpf: string): Observable<any> {

    return this.http.get<any>("http://localhost:8080/api/clientes/cpf/" + cpf)
  }

  public signIn(cpf: string, senha?: string) {
    this.get(cpf).subscribe({
      next: (client) => {
        this.client = client
        console.log(client)
        console.log(client[0].senha)
        console.log(senha)
        console.log(client[0].senha === senha)
        if (client[0].senha === senha) {
          this.router.navigate(['/second'])
        }
      },
      error: () => { console.log('error') },
    })
  }
}
