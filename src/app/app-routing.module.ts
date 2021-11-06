import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCriarComponent } from './funcionario/criar/funcionario-criar.component';
import { FuncionarioListarComponent } from './funcionario/listar/funcionario-listar.component';
import { FuncionarioEditarComponent } from './funcionario/editar/funcionario-editar.component';
import { tarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'funcionario/criar', component: FuncionarioCriarComponent },
  { path: 'funcionario/listar', component: FuncionarioListarComponent },
  { path: 'funcionario/editar/:id', component: FuncionarioEditarComponent },

  { path: 'tarefa/criar', component: tarefaCriarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
