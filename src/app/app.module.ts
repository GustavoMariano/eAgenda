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

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCriarComponent,
    tarefaCriarComponent,
    FuncionarioListarComponent,
    TarefaListarComponent,
    FuncionarioEditarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
