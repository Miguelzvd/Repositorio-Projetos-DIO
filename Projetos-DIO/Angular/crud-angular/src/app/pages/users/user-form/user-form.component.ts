import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
  userForm: FormGroup;
  users: Array<User> = []

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUser().subscribe(response => {
      this.users = response;
    })
  }

  creatUser(): void {
    this.userForm.get('id')?.patchValue(this.users.length + 1)
    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log(`Usuario ${result.nome} ${result.sobrenome} cadastrado com sucesso`)
    });
  }
}


