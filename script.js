class toDoList {
  constructor () {
    this.lista_tarefas = [];
  }

  adicionarTarefa (tarefa) {
  
    this.lista_tarefas.push({descricao: tarefa, concluida: false});
 
  } 
  
  tarefasConcluidas (posição) {
    this.lista_tarefas[posição].concluida = true; 
  }
  
  removerTarefas (pos) {
    this.lista_tarefas.splice (pos,1)
  } 

  exibirLista () {
    console.log ("Tarefas:");
    for (let i = 0; i < this.lista_tarefas.length; i++) {
      let tarefa = this.lista_tarefas[i];
      console.log(`${i + 1}. [${tarefa.concluida ? 'x' : ' '}] ${tarefa.descricao}`);
    }
  }
} 

let minhaLista = new toDoList ()

function tarefa () {
  let tarefa = document.getElementById ("texto");
  return tarefa;
}

let Tarefa = tarefa()

function addTarefa () {
  
}


/*class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push({ nome: tarefa, concluida: false });
        console.log(`Tarefa "${tarefa}" adicionada à lista.`);
    }

    removerTarefa(tarefa) {
        const tarefaEncontrada = this.encontrarTarefa(tarefa);
        if (tarefaEncontrada) {
            this.tarefas = this.tarefas.filter(item => item !== tarefaEncontrada);
            console.log(`Tarefa "${tarefa}" removida da lista.`);
        } else {
            console.log(`Tarefa "${tarefa}" não encontrada na lista.`);
        }
    }

    marcarComoConcluida(tarefa) {
        const tarefaEncontrada = this.encontrarTarefa(tarefa);
        if (tarefaEncontrada) {
            tarefaEncontrada.concluida = true;
            console.log(`Tarefa "${tarefa}" marcada como concluída.`);
        } else {
            console.log(`Tarefa "${tarefa}" não encontrada na lista.`);
        }
    }

    encontrarTarefa(tarefaNome) {
        return this.tarefas.find(item => item.nome === tarefaNome);
    }

    exibirTarefas() {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.nome} - ${tarefa.concluida ? 'Concluída' : 'Pendente'}`);
        });
    }
}

// Criar uma instância da classe ListaDeTarefas
const minhaLista = new ListaDeTarefas();

// Adicionar tarefas à lista
minhaLista.adicionarTarefa("Fazer compras");
minhaLista.adicionarTarefa("Estudar JavaScript");
minhaLista.adicionarTarefa("Fazer exercícios");

// Exibir tarefas
minhaLista.exibirTarefas();

// Marcar tarefa como concluída
minhaLista.marcarComoConcluida("Estudar JavaScript");

// Exibir tarefas após marcação
minhaLista.exibirTarefas();*/