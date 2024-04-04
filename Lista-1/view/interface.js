const readline = require('readline');
const GerenciadorContatos = require('../controller/GerenciadorContatos .js');
const Observer = require('../observer/Observer.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gerenciador = new GerenciadorContatos();
const observer = new Observer();
gerenciador.adicionarObserver(observer);

function menu() {
  console.log("\nEscolha uma opção:");
  console.log("[1] Adicionar Contato");
  console.log("[2] Remover Contato");
  console.log("[3] Listar Contatos");
  console.log("[4] Buscar Contato");
  console.log("[5] Sair");

  rl.question("Opção: ", function(opcao) {
    switch(opcao) {
      case '1':
        adicionarContato();
        break;
      case '2':
        removerContato();
        break;
      case '3':
        listarContatos();
        break;
      case '4':
        buscarContato();
        break;
      case '5':
        console.log("\nSaindo...");
        rl.close();
        break;
      default:
        console.log("\nOpção inválida!");
        menu();
    }
  });
}

function adicionarContato() {
  rl.question("Nome: ", function(nome) {
    if (!nome) {
      console.log("\nO nome não pode ser vazio!")
      return menu();
    }
    rl.question("Telefone: ", function(telefone) {
      if (!telefone) {
        console.log("\nO telefone não pode ser vazio!")
        return menu();
      }
      rl.question("Email: ", function(email) {
        if (!email) {
          console.log("\n O email não pode ser vazio!")
          return menu();
        }
        gerenciador.adicionar(nome, telefone, email);
        console.log("\nContato adicionado com sucesso!");
        menu();
      });
    });
  });
}

function removerContato() {
  gerenciador.remover();
  menu();
}

function listarContatos() {
  const contatos = gerenciador.listar();
  console.log("\nLista de Contatos:");
  contatos.forEach((contato, index) => {
    console.log(`${index + 1}: ${contato.nome} - ${contato.telefone} - ${contato.email}`);
  });
  menu();
}

function buscarContato() {
  rl.question("\nNome do Contato: ", function(nome) {
    const contato = gerenciador.buscar(nome);
    if (contato) {
      console.log("\nContato encontrado:");
      console.log(`${contato.nome} - ${contato.telefone} - ${contato.email}`);
    } else {
      console.log("\nContato não encontrado.");
    }
    menu();
  });
}

menu();