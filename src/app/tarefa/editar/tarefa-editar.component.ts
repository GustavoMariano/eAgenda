import { Component,Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { IHttpTarefaService } from 'src/app/shared/interfaces/IHttpTarefaService';
import { TarefaDetailsViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaDetailsViewModel';
import { TarefaEditViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaEditViewModel';

@Component({
  selector: 'app-tarefa-editar',
  templateUrl: './tarefa-editar.component.html'
})
export class TarefaEditarComponent implements OnInit {
  titulo: string = 'Edita de Tarefa';
  cadastroForm: FormGroup;
  tarefa: TarefaEditViewModel;
  id: any;

  tipos = prioridadeType;
  prioridade: any[];

  constructor(private router: Router,
    private _Activatedroute: ActivatedRoute,
    @Inject('IHttpTarefaServiceToken') private servico: IHttpTarefaService) { }

  ngOnInit(): void {

    this.prioridade = Object.keys(this.tipos).filter(t => !isNaN(Number(t)));
    this.id = this._Activatedroute.snapshot.paramMap.get('id');

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(),
      prioridade: new FormControl(),
      dataCriacao: new FormControl(),
      percentual: new FormControl(),
      dataConclusao: new FormControl()
    })

    this.carregarTarefa();
  } 

  carregarTarefa() {
    this.servico.obterTarefa(this.id)
      .subscribe((tarefa: TarefaDetailsViewModel) => {
        this.carregarFormulario(tarefa);
      });
  }

  editarTarefa() {
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value);
    this.tarefa.id = this.id;
    this.servico.atualizarTarefa(this.tarefa).subscribe(() => {this.router.navigate(['tarefa/listar'])});
  }

  cancelar() {
    this.router.navigate(['tarefa/listar']);
  }

  carregarFormulario(tarefa: TarefaDetailsViewModel) {

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(tarefa.titulo),
      percentual: new FormControl(tarefa.percentual),
      dataCriacao: new FormControl(tarefa.dataCriacao.toLocaleString().split('/').reverse().join('-')),
      dataConclusao: new FormControl(tarefa.dataConclusao.toString() === '' ? '' : tarefa.dataConclusao.toLocaleString().split('/').reverse().join('-')),
      prioridade: new FormControl(tarefa.prioridade)
    });
  }
}
