const prompt = require('prompt-sync')();

class Tarefa {
  constructor(descricao, concluida) {
    this._descricao = descricao;
    this._concluida = concluida;
  }

  info() {
    return `Tarefa: ${this._descricao}\nEstado: ${this._concluida}`;
  }
}

class TarefaRepetitiva extends Tarefa {
  constructor(descricao, concluida, frequencia) {
    super(descricao, concluida);
    this._frequencia = frequencia;
  }

  info() {
    return `${super.info()}\nFrequência: ${this._frequencia}\n`;
  }
}

class TarefaPrioritaria extends Tarefa {
  constructor(descricao, concluida, nivelDePrioridade, dataLimite) {
    super(descricao, concluida);
    this._nivelDePrioridade = nivelDePrioridade;
    this._dataLimite = dataLimite;
  }

  info() {
    return `${super.info()}\nNível de prioridade: ${this._nivelDePrioridade}\nData de limite: ${this._dataLimite}\n`;
  }
}

class TarefaComEtiqueta extends Tarefa {
  constructor(descricao, concluida, etiquetas = []) {
    super(descricao, concluida);
    this._etiquetas = etiquetas;
  }

  info() {
    return `${super.info()}\nEtiquetas: ${this._etiquetas.join(', ')}\n`;
  }
}

class ToDoList {
  constructor() {
    this._listaTarefas = [];
  }

  adicionarTarefa(tarefa) {
    this._listaTarefas.push(tarefa);
  }

  tarefaConcluida() {
    for (let i = 0; i < this._listaTarefas.length; i++) {
      console.log(`${i} - ${this._listaTarefas[i]._descricao}`);
    }
    let op = prompt("Digite o índice para concluir: ");
    this._listaTarefas[op]._concluida = true;
  }

  removerTarefa() {
    for (let i = 0; i < this._listaTarefas.length; i++) {
      console.log(`${i} - ${this._listaTarefas[i]._descricao}`);
    }
    let op = prompt("Digite o índice para remover: ");
    this._listaTarefas.splice(op, 1);
  }

  exibirLista() {
    for (let i = 0; i < this._listaTarefas.length; i++) {
      console.log(this._listaTarefas[i].info());
    }
  }
}

let listaTarefas = new ToDoList();

while (true) {
  let escolha = prompt("Você tem as seguintes opções:\n1 - Adicionar tarefa\n2 - Concluir tarefa\n3 - Remover tarefa\n4 - Visualizar tarefas\n5 - Finalizar\nDigite sua escolha:");

  if (escolha === "1") {
    let decisao = prompt('1 - Tarefa normal\n2 - Tarefa prioritária\n3 - Tarefa repetitiva\n4 - Tarefa com etiqueta');
    let descricao = prompt("Digite a descrição: ");

    if (decisao === "1") {
      let tarefa = new Tarefa(descricao, false);
      listaTarefas.adicionarTarefa(tarefa);
    } else if (decisao === "2") {
      let prioridade = prompt("Digite o nível de prioridade:");
      let dataLimite = prompt("Digite a data limite:");
      let tarefa = new TarefaPrioritaria(descricao, false, prioridade, dataLimite);
      listaTarefas.adicionarTarefa(tarefa);
    } else if (decisao === "3") {
      let frequencia = prompt("Digite a frequência:");
      let tarefa = new TarefaRepetitiva(descricao, false, frequencia);
      listaTarefas.adicionarTarefa(tarefa);
    } else if (decisao === "4") {
      let etiquetas = prompt("Digite as etiquetas separadas por vírgula:").split(',');
      let tarefa = new TarefaComEtiqueta(descricao, false, etiquetas);
      listaTarefas.adicionarTarefa(tarefa);
    }
  } else if (escolha === "2") {
    listaTarefas.tarefaConcluida();
  } else if (escolha === "3") {
    listaTarefas.removerTarefa();
  } else if (escolha === "4") {
    listaTarefas.exibirLista();
  }
  else if (escolha === "5") {
    break;
  }
   else {
    console.log("Escolha inválida. Digite 1, 2, 3, 4 ou 5 para escolher uma opção.");
  }
}
