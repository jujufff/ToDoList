const prompt = require('prompt-sync')();
class tarefa {
  constructor(descricao, concluida ) {
    this._tarefa = descricao;
    this._concluida = concluida;
  }

  info(){
    return ("Tarefa: " + this._tarefa + "\nEstado: " + this._concluida)


  }

}

class tarefaRepetitiva extends tarefa {
  constructor(descricao,concluida,frequencia) {
    super(descricao,concluida)
    this._frequencia = frequencia
  }
  info(){
    return("\nTarefa: " + this._tarefa +"\nEstado: "+ this._concluida + "\nFrequência: " + this._frequencia+"\n")
  }
}

class tarefaPrioritaria extends tarefa {
  constructor(descricao,concluida,nivelDePrioridade, dataLimite) {
    super(descricao,concluida)
    this.nivelDePrioridade = nivelDePrioridade
    this.dataLimite = dataLimite
  }
  info(){
    return("\nTarefa: " + this._tarefa +"\nEstado: " + this._concluida + "\n nivel de prioridade: " + this.nivelDePrioridade+" \ndata de limite: " + this.dataLimite+"\n")
  }
}

class TarefaComEtiqueta extends tarefa {
  constructor (descricao,concluida,etiquetas = []) {
    super(descricao,concluida)
    this.etiquetas 
  }
 info(){
  return("Tarefa: "+this._tarefa+"\nEstado: "  + this._concluida + this.etiqueta)
 }
}

//let tarefa1 = new tarefa(descricao, etiq)


class toDoList {
  constructor() {
    this.lista_tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.lista_tarefas.push(tarefa);
  }

  tarefaConcluida() {
    for (let i = 0; i < this.lista_tarefas.length; i++) {
      console.log(`${i}  -  ${this.lista_tarefas[i]._tarefa}`)
     
    }
    let op = prompt("Digite o indice para concluir: ");
    this.lista_tarefas[op]._concluida = true;
  }

  removerTarefa() {
    for (let i = 0; i < this.lista_tarefas.length; i++) {
      console.log(`${i}  -  ${this.lista_tarefas[i]._tarefa}`)
     
    }
    let op = prompt("Digite o indice para remover: ");
    this.lista_tarefas.splice(op, 1)
  }

  exibirLista() {
    //console.log ("Tarefas:");
    for (let i = 0; i < this.lista_tarefas.length; i++) {
      console.log(this.lista_tarefas[i].info())
      //let tarefa = this.lista_tarefas[i];
      //console.log(`${i + 1}. ${tarefa.descricao}`);

    }
  }
}
//const nome = document.getElementById("tarefaAdicionada").value
let tarefa1 = new tarefa("comer",false)
let tarefa2 = new tarefaPrioritaria("banhar",false,"alto","1452")
let tarefa3 = new tarefaRepetitiva ("dormir",false,"todo dia")

let listaTarefas = new toDoList()


while(true){
  let escolha = prompt("Voce tem as seguintes opcoes: \n\n1- adicionar tarefa\n2- concluir tarefa\n3- remover tarefa\n4- vizualizar tarefas\n\nDigite sua escolha:")
 
   if(escolha == 1){
        let decisao = prompt('1- tarefa normal\n2- tarefa prioritaria\n3- tarefa repetitiva\n4- tarefa com etiqueta')
        if(decisao == 1){
          let descricao = prompt("digite a descricao: ")
          let tarefa1 = new tarefa(descricao,false)
          listaTarefas.adicionarTarefa(tarefa1)
         
        }else if(decisao == 2){
          let descricao = prompt("digite a descricao: ")
          let prio = prompt("Digite o nivel de prioridade:")
          let dtmax = prompt("Digite a data maxima")
          let tarefa1 = new tarefaPrioritaria(descricao,false,prio,dtmax)
          listaTarefas.adicionarTarefa(tarefa1)
        }else if(decisao == 3){
          let descricao = prompt("digite a descricao: ")
          let frequencia = prompt("Digite a frequência:")
          let tarefa1 = new tarefaRepetitiva(descricao,false,frequencia)
          listaTarefas.adicionarTarefa(tarefa1)
        }else if(decisao == 4){
          let descricao = prompt("digite a descricao: ")
          let etiqueta = prompt("Digite a etiqueta:")
          let tarefa1 = new TarefaComEtiqueta(descricao,false,etiqueta)
          listaTarefas.adicionarTarefa(tarefa1)
        }
        
        else if(escolha == 'p'){
    break;
   }
}
}
