
var questions = [
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'O que é npm e para que ele serve',
		r: 'O npm é o gerenciador de pacotes do ecosistema Node. Ele tem a função de gerenciar os projetos e pacotes javascript externos que precisemos utilizar em cada aplicação. Quando o Node é instalado, o npm também já vem por default e com certeza será muito útil em qualquer projeto desenvolvido sobre o Node, visto que é muito comum que se precise de libs externas para facilitar o desenvolvimento de certas funcionalidades. O próprio npm possui diversas bibliotecas que podem ser integradas com o Node. O npm consegue, portanto ajudar na instalação de pacotes, na execução de algumas tarefas dentro do ambiente do Node e como repositório de bibliotecas.'
	},
	{
		q: 'Crie um web server com node.js',
		r: "<pre>var http = require('http');http.createServer(function(req,res) { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });res.end('<h2> Olá mundo! </h2>');}).listen(3000);console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…’);</pre>"
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	},
	{
		q: 'Descreva com suas palavras o que é o Node.js.',
		r: 'O Node.js é uma plataforma, ou um ambiente de execução para códigos javascript escrita em cima da engine de Javascript do Chrome, a V8. Ele é todo baseado em eventos e suas operações são não-bloqueantes, o que lhe confere bastante eficiência e leveza.'
	}

]
