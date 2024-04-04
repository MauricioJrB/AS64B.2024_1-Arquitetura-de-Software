Objetivo: Deve-se aplicar padrões de projeto em JavaScript, tanto estruturais quanto comportamentais em um contexto prático.

Problema: Você foi contratado para desenvolver um sistema de gerenciamento de contatos em JavaScript. O sistema deve permitir aos
usuários adicionar, remover e listar contatos. Além disso, eles devem ser capazes de buscar contatos por nome.

Requisitos Iniciais:

1 - Implemente uma classe Contato que represente um contato com os seguintes atributos: nome, telefone e email.
2 - Implemente uma classe GerenciadorContatos que possua métodos para adicionar, remover e listar contatos. Este gerenciador deve 
manter uma lista de contatos.
3 - Implemente uma interface simples de linha de comando (CLI) que permita aos usuários interagirem com o sistema (adicionar,
remover, listar e buscar contatos).
4 - Utilize um padrão de projeto estrutural para garantir que a adição e remoção de contatos possam ser facilmente estendidas no
futuro, sem modificar o código existente.
5 - Utilize um padrão de projeto comportamental para implementar a funcionalidade de busca de contatos, garantindo que esta possa 
variar independentemente dos algoritmos de busca.

Padrão de projeto Observer e MVC: <br>
Este padrão define a dependência um-para-muitos entre 
objetos. Dessa forma, quando um objeto mudar seu estado, todos os seus dependentes serão avisados e atualizados automaticamente. 
O processo funciona mais ou menos da seguinte maneira: uma classe é marcada como observada e outras classes são marcadas como
observadoras. Quando o objeto observado sofre uma alteração, ele envia uma mensagem do tipo “fui modificado” para seus observadores 
e estes são atualizados para o estado atual com tais alterações. 

Fonte: https://www.devmedia.com.br/o-padrao-de-projeto-observer/22861

Documentação:
- O projeto consta com as seguintes pastas: controller, model, observer e view. <br>
- A pasta model contém o arquivo Contato.js onde possui a classe Contato e seu contrutor, para gerar um novo objeto do tipo contato. <br>
- A pasta controller contém o arquivo GerenciadorContatos, onde possui a classe para gerenciar os contatos com os métodos adicionar, remover, listar todos e buscar, junto dos métodos do Observer adicionarObserver e notifyObeserver. <br>
    * Adicionar: a função gera adiciona um novo contato instanciando na classe Contato e inserindo no Array. E faz a chamada para a função
      notifyObserver, que retorna ao usuário dizendo que houve atualização de dados. <br>
    * Remover: a função remove um contato a partir da escolha do usuário através de um index, e também retorna a atualização do Observer
       através da função notifyObservers. <br>
    * Listar: retorna todos os contados inseridos no Array. <br>
    * Buscar: faz uma busca do contato pelo nome inserido pelo usuário e retorna os dados. <br>
    * AdicionarObserver: insere um novo observador numa lista. <br>
    * notifyObservers: retorna os dados a cada atualização cada vez que adicionar ou remover um contato. <br>
- A pasta Observer contém o arquivo Observer.js onde possui um método retornando os dados atualizados.
- A pasta view contém o arquivo interface.js onde é gerado toda a parte visual do projeto através de uma interface simples (CLI).
    * A entrada de dados é realizada através de funções de adiconar, remover, listar e buscar.
    * Cada função faz a conexão com a classe GerenciadorContatos chamando seus respectivos métodos de adiconar, remover, listar e buscar.
