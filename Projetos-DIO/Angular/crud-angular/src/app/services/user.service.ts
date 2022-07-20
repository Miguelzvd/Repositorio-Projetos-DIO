import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/e78d7f96-2155-4ae4-ac69-d072ac6e45c3'

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREAT, READ, UPDATE, DELETE
  // Retorna a lista de usuarios READ

  getUser():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
