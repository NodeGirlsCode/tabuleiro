var GLOBAL_QTD = 0;
var GLOBAL_GROUP_CURRENT;
var groups     = [];

var questions = [
	{
		q: 'Ishiii, deu ruim.. passe a vez',
		r: ':('
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Uau, nem precisa responder, jogue novamente',
		r: '<3'
	},
	{
		q: 'O que é npm e para que ele serve',
		r: 'O npm é o gerenciador de pacotes do ecosistema Node. Ele tem a função de gerenciar os projetos e pacotes javascript externos que precisemos utilizar em cada aplicação. Quando o Node é instalado, o npm também já vem por default e com certeza será muito útil em qualquer projeto desenvolvido sobre o Node, visto que é muito comum que se precise de libs externas para facilitar o desenvolvimento de certas funcionalidades. O próprio npm possui diversas bibliotecas que podem ser integradas com o Node. O npm consegue, portanto ajudar na instalação de pacotes, na execução de algumas tarefas dentro do ambiente do Node e como repositório de bibliotecas.'
	},
	{
		q: 'Crie um web server com node.js',
		r: 'Faça um exemplo'
	},
	{
		q: 'Você deu sorte jogue novamente',
		r: 'XD'
	},
	{
		q: 'O que é CommoJS?',
		r: 'CommonJS é uma convenção para carregamentos de módulos javascript em aplicações server-side. O objeto que o node disponibiliza é o module e a função é passada para o atributo exports desse objeto.'
	},
	{
		q: 'Escreva uma exemplo de modulo criado com nodejs',
		r: 'Faça um exemplo'
	},
	{
		q: 'Ishiii, deu ruim.. passe a vez',
		r: ':('
	},
	{
		q: 'O que vocês sabe sobre express?',
		r: 'O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.'
	},
	{
		q: 'O que são as rotas?',
		r: 'Rotas são as configurações que criamos para cada url específica que queremos atender no nosso sistema server-side implementado em javascript.'
	},
	{
		q: 'Você deu sorte pule para a próxima casa',
		r: 'XD'
	},
	{
		q: 'O que é nodemon?',
		r: 'Ele funciona como um watcher, isto é, elefica observando toda vez que um arquivo do seu projeto é alterado.Quando  ocorre  uma  alteração  de  arquivo,  o  nodemon  reinicia  oprocesso  do  Node  e  a  aplicação  está  pronta  novamente,  evitandoter de ficar executando todo momento o comando  node .'
	},
	{
		q: 'Na sua visão qual o maior problema na arquiteturas bloqueantes?',
		r: 'Os  sistemas  para  web  desenvolvidos  nativamente  sobreplataforma .NET, Java, PHP, Ruby  ou Python  possuem  umacaracterística  em  comum:  eles  paralisam  um  processamentoenquanto  utilizam  um  I/O  no  servidor.  Essa  paralisação  éconhecida como modelo bloqueante (Blocking-Thread).Em um servidor web, podemos visualizá-lo de forma ampla efuncional. Vamos considerar que cada processo é uma requisiçãofeita  pelo  usuário.  Com  o  decorrer  da  aplicação,  novos  usuáriosvão acessando-a, gerando uma requisição no servidor. Um sistemabloqueante  enfileira  as  requisições  e  depois  as  processa,  uma  auma,  não  permitindo  múltiplos  processamentos.  Enquanto  umarequisição  é  processada,  as  demais  ficam  em  espera,  mantendouma fila de requisições ociosas por um período de tempo.'
	},
	{
		q: 'Eitah! Fica uma rodada sem jogar',
		r: ':('
	},
	{
		q: 'Posso fazer paralelismo com Nodejs',
		r: 'Suas aplicações serão single-thread, ou seja, cada uma terá umainstância  de  um  único  processo.  Se  você  está  acostumado  atrabalhar  com  programação  concorrente  em  plataformamulti-thread,  infelizmente  não  será  possível  com  Node,  mas  saiba  queexistem  outras  maneiras  de  se  criar  um  sistema  concorrente. '
	},
	{
		q: 'Ishiii, deu ruim.. passe a vez',
		r: ':('
	},
	{
		q: 'O que é callbackhell?',
		r: 'são callbacks encadeados, em    certos    momentos,inevitavelmente  implementaremos  diversas  funções  assíncronas, que serão encadeadas uma na outra por meio das suas funções de callback.  Assim,  tal  processamento  terá  uma  sequência  de execução.'
	},
	{
		q: 'O que pe JWT?',
		r: 'O  JWT  (JSON Web Tokens)  é  uma  estratégia  bem  simples  esegura para autenticação de APIs RESTful. Ela é um open standardpara autenticações de aplicações web baseado no tráfego de tokensem  formato  JSON,  entre  o  cliente  e  servidor.'
	},
	{
		q: 'Ishiii, deu ruim.. passe a vez',
		r: ':('
	},
	{
		q: 'O que são os verbos HTTP?',
		r: 'Os verbos HTTP definem as possíveis operações que podem ser feitas sobre o protocolo HTTP. Eles formam um conjunto pequeno de interfaces bem definidas, que facilita bastante a maneira como dois recursos trocam informações utilizando o HTTP, visto que eles precisam apenas utilizar esses métodos de acordo com a semântica de cada operação, sem que precisem sempre implementar tudo do zero. Essa padronização cria uma uniformidade muito importante para o protocolo HTTP. Se você quiser aprofundar um pouco mais nesse assunto (o que parece uma excelente ideia para quem pretende trabalhar com serviços web), você pode começar dando uma olhada nesse post da Caelum, que traz um apanhado bem legal de características do padrão REST (que é todo baseado no funcionamento do HTTP):'
	},
	{
		q: 'O é Sequelize?',
		r: 'O Sequelize é um ORM(Object/Relational Mapper) baseado em Promise para Node.js e io.js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transação, relacionamentos, replicação de leitura e muito mais.'
	},
	{
		q: 'Ishiii, deu ruim.. passe a vez',
		r: ':('
	},
	{
		q: 'O que é Socket.io?',
		r: 'Socket.io é um uma biblioteca Javascript feita para construir aplicações real-time, possibilitando uma comunicação bi-direcional entre cliente e servidor. O socket.io utiliza as especificações de Web Sockets (para quem quer saber mais, recomendo dar uma olhada neste ótimo artigo da HTML5 Rocks).'
	},
	{
		q: 'Módulo HTTP',
		r: 'O Socket.io roda, no lado do servidor, em NodeJS, e, no lado do cliente, ele roda diretamente no browser, possibilitando uma enorme gama de possibilidades de aplicações, como jogos, sistemas de notificações, real-time analytics e sistemas de chats e conversas em tempo real.'
	},
	{
		q: 'Ishiii, deu ruim.. passe a vez',
		r: ':('
	},
	{
		q: 'Fale sobre template	 engine	',
		r: 'Um template engine é uma ferramenta que auxilia o desenvolvedor a criar páginas web dinâmicas, pois traz consigo uma série de funcionalidades de manipulação destas páginas. A partir de um template engine, é possível, dentro de uma página html, executar estruturas de controle, condição, manipulação de variáveis etc. Desta forma, podemos "juntar" os dados vindos de uma base qualquer (banco de dados, por exemplo) com uma página html, alterando apenas os pontos específicos da página, nos quais os dados devem se encontrar.'
	}

];


if(window.localStorage.getItem("num_g")!=undefined &&window.localStorage.getItem("num_g")!= null)
	GLOBAL_QTD = window.localStorage.getItem("num_g");

function createGroups(){
	GLOBAL_QTD     = $("#qtd_groups").val();

	window.location = 'jogo.html';
	window.localStorage.setItem("num_g", GLOBAL_QTD);
}

function rando(){
	var num_sort = (Math.floor(Math.random() * 6))+ 1;
	document.getElementById("result_num").innerHTML = '';
	setTimeout(function(){
		document.getElementById("result_num").innerHTML = num_sort;
	} ,800);
	var current_step = $(".pin:nth-of-type("+GLOBAL_GROUP_CURRENT+")").data('step');
	movePin(current_step,num_sort, GLOBAL_GROUP_CURRENT);
	$(".pin:nth-of-type("+GLOBAL_GROUP_CURRENT+")").data('step', (current_step + num_sort));
}

function loadTabuleiro(){
	var arrnNames = ['Mulher Maavilha', 'Sailor Moon', 'Sakura Card Captors ', 'Mulan', 'Jean Grey'];

	for (var i = 0; i < GLOBAL_QTD; i++) {
		groups.push({ name  : arrnNames[i], score : 1});
	}

	var steps='';
	for(i=0; i<27; i++){
		if(i==0)
			steps += '<div class="step">Inicio</div>';
		else if(i==26)
			steps += '<div class="step">Chegada</div>';
		else
			steps += '<div class="step">'+i+'</div>';
	}

	document.getElementById("tab").innerHTML = steps;
	loadPin(GLOBAL_QTD);
	GLOBAL_GROUP_CURRENT = 1;

}

function movePin(num_step, num_sort, pin){
	$("#res").text('');
	if((num_step+num_sort) >= 26){
		var current_step = $('.step:nth-of-type(27)').offset();
		youWin();
	}
	else{
		var current_step = $('.step:nth-of-type('+(num_step+num_sort)+')').offset();
		setTimeout(function(){
			pergunta(questions[num_step+num_sort])
			resp(questions[num_step+num_sort]);
		}, 800);
	}

	$(".pin:nth-of-type("+pin+")").animate({
		top: current_step.top,
		left:current_step.left,
	}, 800);



}

function youWin(){
	$(".overlay").fadeIn(800);
	$(".modal h2").text('Você venceu!');
	$(".modal p").text('Parabéns ao grupo '+ groups[GLOBAL_GROUP_CURRENT -1].name);
	$(".modal button:nth-of-type(1)").text("Fim de jogo");
	$(".modal button:nth-of-type(2)").remove();
	window.localStorage.setItem("num_g", undefined);

}

function pergunta(question){
	$("#res").text('');
	$(".overlay").fadeIn(800);
	$(".modal h2").text(question.q);

}

function closeModal(){
	$(".overlay").fadeOut();
	$("#res").text('');
}

function loadPin(num){
	var pins = '';
	for (var i = 0; i < num; i++) {
		pins += '<span class="pin" data-step="1">pin</span>';
	}

	$(".box-pins").html(pins);
}



function error(){
	$(".overlay").fadeIn(800);
	$(".modal h2").text("Você errou, é a hora do outros grupo. :(");
	$("#res").text('');

	setTimeout(function(){
		$(".overlay").fadeOut();
	},800);

	if(GLOBAL_GROUP_CURRENT < GLOBAL_QTD)
		GLOBAL_GROUP_CURRENT +=1;
	else
		GLOBAL_GROUP_CURRENT =1;


}

function resp(question){
	console.log(question);
	$('#resp').click(function(){
		$("#res").text(question.r)
	})
}
