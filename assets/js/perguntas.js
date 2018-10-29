var perguntas = [
	{
		q: 'Ishiii, deu ruim... Passe a vez',
		r: ':('
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução, para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Uau, nem precisa responder! Pode avançar!',
		r: '<3'
	},
	{
		q: 'Diga que é npm e para que ele serve',
		r: 'O npm é o gerenciador de pacotes do ecossistema Node. Ele tem a função de gerenciar os projetos e pacotes javascript externos que precisemos utilizar em cada aplicação. Quando o Node é instalado, o npm também já vem por default e com certeza será muito útil em qualquer projeto desenvolvido sobre o Node, visto que é muito comum que se precise de libs externas para facilitar o desenvolvimento de certas funcionalidades. O próprio npm possui diversas bibliotecas que podem ser integradas com o Node. O npm consegue, portanto, ajudar na instalação de pacotes, na execução de algumas tarefas dentro do ambiente do Node e como repositório de bibliotecas.'
	},
	{
		q: 'Crie um web server com node.js',
		r: 'Faça um exemplo'
	},
	{
		q: 'Você deu sorte! Pode avançar sem responder!',
		r: 'XD'
	},
	{
		q: 'O que é CommonJS?',
		r: 'CommonJS é uma convenção para carregamentos de módulos javascript em aplicações server-side. O objeto que o node disponibiliza é o module e a função é passada para o atributo exports desse objeto.'
	},
	{
		q: 'Escreva uma exemplo de modulo criado com nodejs',
		r: 'Faça um exemplo'
	},
	{
		q: 'Ishiii, deu ruim... Passe a vez',
		r: ':('
	},
	{
		q: 'O que você sabe sobre express?',
		r: 'O Express é um framework para aplicativo da web do Node.js mínimo e flexível, que fornece um conjunto robusto de recursos para aplicativos web e móvel.'
	},
	{
		q: 'O que são as rotas?',
		r: 'Rotas são as configurações que criamos para cada url específica que queremos atender no nosso sistema server-side implementado em javascript.'
	},
	{
		q: 'Você deu sorte! Pode avançar!',
		r: 'XD'
	},
	{
		q: 'O que é nodemon?',
		r: 'Ele funciona como um watcher, isto é, ele fica observando toda vez que um arquivo do seu projeto é alterado. Quando  ocorre  uma  alteração  de  arquivo,  o  nodemon  reinicia  o processo  do  Node  e  a  aplicação  está  pronta  novamente,  evitando ter que ficar executando todo momento o comando  node.'
	},
	{
		q: 'Qual o maior problema na arquiteturas bloqueantes?',
		r: 'Os  sistemas  para  web  desenvolvidos  nativamente  sobreplataforma .NET, Java, PHP, Ruby  ou Python  possuem  uma característica  em  comum:  eles  paralisam  um  processamento enquanto  utilizam  um  I/O  no  servidor.  Essa  paralisação  é conhecida como modelo bloqueante (Blocking-Thread). Em um servidor web, podemos visualizá-lo de forma ampla e funcional. Vamos considerar que cada processo é uma requisição feita  pelo  usuário.  Com  o  decorrer  da  aplicação,  novos  usuários vão acessando-a, gerando uma requisição no servidor. Um sistema bloqueante  enfileira  as  requisições  e  depois  as  processa,  uma  a uma,  não  permitindo  múltiplos  processamentos.  Enquanto  uma requisição  é  processada,  as  demais  ficam  em  espera,  mantendo uma fila de requisições ociosas por um período de tempo.'
	},
	{
		q: 'Eitah! Essa rodada você não joga!',
		r: ':('
	},
	{
		q: 'Posso fazer paralelismo com Nodejs?',
		r: 'Suas aplicações serão single-thread, ou seja, cada uma terá uma instância  de  um  único  processo.  Se  você  está  acostumado  a trabalhar  com  programação  concorrente  em  plataforma multi-thread,  infelizmente  não  será  possível  com  Node,  mas  saiba  que existem  outras  maneiras  de  se  criar  um  sistema  concorrente. '
	},
	{
		q: 'Ishiii, deu ruim... Passe a vez',
		r: ':('
	},
	{
		q: 'O que é callback hell?',
		r: 'São callbacks encadeados. Em certos momentos, inevitavelmente, implementaremos diversas funções assíncronas, que serão encadeadas uma na outra por meio das suas funções de callback. Assim, tal processamento terá uma sequência de execução.'
	},
	{
		q: 'O que é JWT?',
		r: 'O JWT (JSON Web Tokens) é uma estratégia bem simples e segura para autenticação de APIs RESTful. Ela é um open standard para autenticações de aplicações web baseado no tráfego de token sem formato JSON, entre o cliente e servidor.'
	},
	{
		q: 'Ishiii, deu ruim... Passe a vez',
		r: ':('
	},
	{
		q: 'O que são os verbos HTTP?',
		r: 'Os verbos HTTP definem as possíveis operações que podem ser feitas sobre o protocolo HTTP. Eles formam um conjunto pequeno de interfaces bem definidas, que facilita bastante a maneira como dois recursos trocam informações utilizando o HTTP, visto que eles precisam apenas utilizar esses métodos de acordo com a semântica de cada operação, sem que precisem sempre implementar tudo do zero. Essa padronização cria uma uniformidade muito importante para o protocolo HTTP.'
	},
	{
		q: 'O é Sequelize?',
		r: 'O Sequelize é um ORM (Object/Relational Mapper) baseado em Promise para Node.js e io.js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transação, relacionamentos, replicação de leitura e muito mais.'
	},
	{
		q: 'Ishiii, deu ruim... Passe a vez',
		r: ':('
	},
	{
		q: 'O que é Socket.io?',
		r: 'Socket.io é um uma biblioteca Javascript feita para construir aplicações real-time, possibilitando uma comunicação bi-direcional entre cliente e servidor. O socket.io utiliza as especificações de Web Sockets (para quem quer saber mais, recomendo dar uma olhada neste ótimo artigo da HTML5 Rocks).'
	},
	{
		q: 'Como o Socket.io roda?',
		r: 'O Socket.io roda em NodeJS no lado do servidor e, no lado do cliente, ele roda diretamente no browser, possibilitando uma enorme gama de possibilidades de aplicações, como jogos, sistemas de notificações, real-time analytics e sistemas de chats e conversas em tempo real.'
	},
	{
		q: 'Ishiii, deu ruim... Passe a vez',
		r: ':('
	},
	{
		q: 'Fale sobre template	engine	',
		r: 'Um template engine é uma ferramenta que auxilia o desenvolvedor a criar páginas web dinâmicas, pois traz consigo uma série de funcionalidades de manipulação destas páginas. A partir de um template engine, é possível, dentro de uma página html, executar estruturas de controle, condição, manipulação de variáveis etc. Desta forma, podemos "juntar" os dados vindos de uma base qualquer (banco de dados, por exemplo) com uma página html, alterando apenas os pontos específicos da página, nos quais os dados devem se encontrar.'
	}

];
