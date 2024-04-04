const Contato = require("../model/Contato");

class GerenciadorContatos {
  constructor() {
    this.contatos = [];
    this.observers = [];
  }
  adicionar(nome,telefone, email) {
    let novoContato = new Contato(nome, telefone, email);
    this.contatos.push(novoContato);
    this.notifyObservers();
  }
  remover() {
    if (this.contatos.length == 0) {
      console.log("Contato não encontrado!");
      return;
    }
    this.contatos.pop();
    this.notifyObservers();
  }
  listar() {
    return this.contatos;
  }
  buscar(nome) {
    return this.contatos.find(contato => contato.nome == nome);
  }
  adicionarObserver(observer) {
    this.observers.push(observer);
  }
  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.contatos);
    });
  }
}

module.exports = GerenciadorContatos;