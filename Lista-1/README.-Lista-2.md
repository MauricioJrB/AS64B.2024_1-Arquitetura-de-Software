## __Lista 2 - Refatoração e modelagem__

Com base na sua implementação da Lista 1 (Design Pattern):
1- Construa uma modelagem do sistema original (com os padrões de projeto aplicado), utiliando UML. <br>

2 - Aplique pelo menos 3 princípios de refatoração SOLID no sistema.<br>

3 - Documente justificando as refatorações aplicadas e os diagramas UML desenvolvidos. <br>

## __Princípios de Design__
Este projeto segue os princípios de design SOLID para promover uma estrutura de código robusta e de fácil manutenção. Abaixo estão os princípios que guiam a implementação:

## __SRP - Princípio da Responsabilidade Única__
Cada classe neste projeto tem uma única responsabilidade bem definida. Isso garante que as classes sejam coesas e mantenham o foco em uma única área de funcionalidade.

## __OCP - Princípio Aberto/Fechado__
A classe GerenciadorContatos está aberta para extensão, permitindo adicionar novos tipos de observadores para notificar sobre mudanças nos contatos. No entanto, a funcionalidade existente do gerenciador de contatos permanece fechada para modificação, garantindo que mudanças não impactem o comportamento existente.

## __DIP - Princípio da Inversão de Dependência__
O GerenciadorContatos depende de abstrações, como a classe Observer, em vez de depender de implementações concretas. Isso facilita a extensibilidade do sistema e permite que diferentes tipos de observadores sejam adicionados sem modificar o código existente. <br>

## __Diagrama UML__
![Diagrama-UML](https://github.com/MauricioJrB/AS64B.2024_1-Arquitetura-de-Software/assets/127567339/8b418d8e-5b3a-4cd5-8f87-a48e29c7b70e)

class Contato {
  - nome: string
  - telefone: string
  - email: string
  + Contato(nome: string, telefone: string, email: string)
}

class Observer {
  + update(contatos: array): void
}

class GerenciadorContatos {
  - contatos: array
  - observers: array
  + GerenciadorContatos()
  + adicionar(nome: string, telefone: string, email: string): void
  + remover(index: number): void
  + listar(): array
  + buscar(nome: string): Contato
  + adicionarObserver(observer: Observer): void
  - notifyObservers(): void
}

Contato --> "1" GerenciadorContatos : cria
GerenciadorContatos "1" --> "*" Observer : possui
GerenciadorContatos <-- Observer : notifica


