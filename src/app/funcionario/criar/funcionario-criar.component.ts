import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionario-criar',
  templateUrl: './funcionario-criar.component.html'
})

export class FuncionarioCriarComponent implements OnInit {
  titulo: string = 'Cadastro de Funcionário';
  cadastroForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      dataAdmissao: new FormControl(''),
      cargo: new FormControl('')
    })
  }

  adicionarFuncionario() {
    console.log(this.cadastroForm.value);
  }

}
