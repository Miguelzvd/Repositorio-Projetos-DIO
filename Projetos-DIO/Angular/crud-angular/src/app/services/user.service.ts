import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/b8183ab8-ee00-4c1d-9efa-5aa0ecc812b9'


  httpOptions = {
    headers: new HttpHeaders({ // HttpHeaders: eh um alias.
      'Content-Type': 'application/json',
    }) 
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREAT, READ, UPDATE, DELETE
  // Retorna a lista de usuarios READ

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  // Salva usuario no banco: CREATE
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  // Deleta o usuario do banco: DELETE
  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  // Edita o usuario UPDATE
  updateUser(id: string, user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`,  user, this.httpOptions) // put: ser para atualizar os dados
  }

  // lista usuario unico
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
