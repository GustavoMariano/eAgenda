import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioCriarComponent } from './funcionario/criar/funcionario-criar.component';
import { tarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { FuncionarioListarComponent } from './funcionario/listar/funcionario-listar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
import { FuncionarioEditarComponent } from './funcionario/editar/funcionario-editar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';
import { LocalStorageFuncionarioService } from './funcionario/services/local-storage-funcionario.service';
import { LocalStorageTarefaService } from './tarefa/services/local-storage-tarefa.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCriarComponent,
    tarefaCriarComponent,
    FuncionarioListarComponent,
    TarefaListarComponent,
    FuncionarioEditarComponent,
    TarefaEditarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [{provide: 'IFuncionarioServiceToken', useClass: LocalStorageFuncionarioService}, 
  {provide: 'ITarefaServiceToken', useClass: LocalStorageTarefaService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
