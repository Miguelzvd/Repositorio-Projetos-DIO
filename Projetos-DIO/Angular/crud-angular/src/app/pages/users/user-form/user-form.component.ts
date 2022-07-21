import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users: Array<User> = []
  userId:any = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private router: Router) {
    this.userForm = this.fb.group({ // form builder
      id: 0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.userId = params.get('id')
      console.log(this.userId)
      if(this.userId !== null){
        this.userService.getUser(this.userId).subscribe(result => {
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao
          })
        })
      }
    })

    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  creatUser(): void {
    this.userForm.get('id')?.patchValue(this.users.length + 1)
    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log(`Usuario ${result.nome} ${result.sobrenome} cadastrado com sucesso`)
    });
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(result => {
      console.log('Usuario atualizado', result)
    },
    (err) => {
      console.log(err)
    },
    () => {
      this.router.navigate(['/']);
    })
  }

  actionButton() { 
    if(this.userId !== null){
      this.updateUser()
    }
    else{
      this.creatUser()
    }
  }
}


