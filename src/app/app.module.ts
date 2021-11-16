import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioCriarComponent } from './funcionario/criar/funcionario-criar.component';
import { FuncionarioListarComponent } from './funcionario/listar/funcionario-listar.component';
import { FuncionarioEditarComponent } from './funcionario/editar/funcionario-editar.component';
import { tarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';
import { LocalStorageFuncionarioService } from './funcionario/services/local-storage-funcionario.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpTarefaService } from './tarefa/services/http-tarefa-service';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCriarComponent,
    FuncionarioListarComponent,
    FuncionarioEditarComponent,
    tarefaCriarComponent,
    TarefaListarComponent,
    TarefaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    {provide: 'IFuncionarioServiceToken', useClass: LocalStorageFuncionarioService}, 
    {provide: 'IHttpTarefaServiceToken', useClass: HttpTarefaService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
