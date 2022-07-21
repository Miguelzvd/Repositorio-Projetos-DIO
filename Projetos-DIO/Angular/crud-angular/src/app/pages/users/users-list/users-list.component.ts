import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User> = [] // O Array<User> traz o modelo de usuario como padrao para o array.

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    }, err => console.log('Error AO EXECUTAR:', err.status))
  }

  deleteUser(id:number): void {
    this.userService.deleteUser(id).subscribe(response => {
      console.log('Usuario excluid!')
    }, err => {
      console.log('Error:', err)
    }, () => { // Executa esse trecho apos finalizar todas requisicoes acima.
      this.getUser();
    }
    )
  }
}
