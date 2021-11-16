import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { IFuncionarioService } from './shared/interfaces/IFuncionarioService';
import { IHttpTarefaService } from './shared/interfaces/IHttpTarefaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estoque';
  registroSelecionado: number;

  constructor(private router: Router, private servicoModal: NgbModal,
    @Inject('IHttpTarefaServiceToken') private servico: IHttpTarefaService) {

    /*     this.minhaPromise('Alexandre')
          .then(result => console.log(result))
          .catch(erro => console.log(erro)); */

    /*     this.minhaObservable('Alexandre')
          .subscribe(result => console.log(result),
            erro => console.log(erro)); */

  }

  minhaObservable(nome: string): Observable<string> {
    return new Observable(subscriber => {

      if (nome == 'Ramon') {
        subscriber.next('Olá');
        subscriber.next('Olá de novo');
        setTimeout(() => {
          subscriber.next('Olá com delay.')
        }, 3000);
      } else {
        subscriber.error('Ocorreu um erro.')
      }
    });
  }

  minhaPromise(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome == 'Ramon') {
        setTimeout(() => {
          resolve('Seja bem vindo ' + nome);
        }, 2000);
      } else {
        reject('Você não é Ramon');
      }
    })
  }

  abrirConfirmacao(modal: any) {
    this.servicoModal.open(modal).result.then((resultado) => {
      if (resultado == 'Excluir') {
        this.servico.excluirTarefa(this.registroSelecionado)
          .subscribe(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['tarefa/listar']);
            });
          })
      }
    }).catch(erro => erro);
  }

  /*   abrirConfirmacao(modal: any) {
      this.servicoModal.open(modal).result.then((resultado) => {
        if (resultado == 'Excluir') {
          this.servico.excluirFuncionario(this.registroSelecionado);
        }
      }
      );
    } */
}
