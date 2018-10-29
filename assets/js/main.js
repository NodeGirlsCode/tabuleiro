var GLOBAL_QTD = 0
var grupos = []
var grupoAtual = null
var fimDeJogo = false
var numeroDado = null



if (window.localStorage.getItem("num_g"))
	GLOBAL_QTD = window.localStorage.getItem("num_g")

function createGroups() {
	GLOBAL_QTD = $("#qtd_grupos").val()

	window.location = 'jogo.html'
	window.localStorage.setItem("num_g", GLOBAL_QTD)
}

function carregarTabuleiro() {
	var arrnNomes = ['Mulher Maravilha', 'Sailor Moon', 'Sakura Card Captors ', 'Mulan', 'Jean Grey']

	for (var i = 0; i < GLOBAL_QTD; i++) {
		grupos.push({ id: i + 1, nome: arrnNomes[i], posicaoAtual: 1 })
	}

	var casas=''
	for (i = 0; i < 27; i++) {
		if (i == 0)
		casas += '<div class="step">Inicio</div>'
		else if (i == 26)
		casas += '<div class="step">Chegada</div>'
		else
		casas += '<div class="step">'+i+'</div>'
	}
	document.getElementById("tab").innerHTML = casas
	carregaAvatar(GLOBAL_QTD)
	grupoAtual = grupos[0]
}

function carregaAvatar(num) {
	var pins = ''
	for (var i = 0; i < num; i++) {
		pins += '<span class="pin" data-step="1">pin</span>'
	}
	$(".box-pins").html(pins)
}

function iniciaJogada() {
	rando()
	pergunta(perguntas[grupoAtual.posicaoAtual + numeroDado])
}

function rando() {
	numeroDado = (Math.floor(Math.random() * 6)) + 1
	document.getElementById("result_num").innerHTML = ''
	setTimeout(function() {
		document.getElementById("result_num").innerHTML = numeroDado
	}, 300)
}

function pergunta(question) {
	$("#res").text('')
	$(".overlay").fadeIn(800)
	$(".modal h2").text(question.q)
}


function fimDeTabuleiro(posicao) {
	return posicao >= 26
}

function defineGrupoAtual() {
	if (grupoAtual.id == GLOBAL_QTD)  {
		grupoAtual = grupos[0]
		return
	}
	grupoAtual = grupos[grupoAtual.id]
}

function acertou() {
	grupoAtual.posicaoAtual = grupoAtual.posicaoAtual + numeroDado
	moveAvatar(grupoAtual.posicaoAtual, grupoAtual.id)
	$(".overlay").fadeOut()
	$("#res").text('')
	if (fimDeTabuleiro(grupoAtual.posicaoAtual)) {
		moveAvatar(26, grupoAtual.id)
		venceu()
		fimDeJogo = true
		return
	}
	defineGrupoAtual()
}

function errou() {
	$(".overlay").fadeIn(800)
	$(".modal h2").text(":(")
	$("#res").text('')

	setTimeout(function() {
		$(".overlay").fadeOut()
	}, 800)
	defineGrupoAtual()
}

function moveAvatar(posicao, pin) {
	if (posicao > 26) posicao = 27
	var casaAtual = $('.step:nth-of-type(' + (posicao) + ')').offset()
 	$(".pin:nth-of-type(" + pin + ")").animate({
		top: casaAtual.top,
		left:casaAtual.left,
	}, 800)
}

function venceu() {
	$(".overlay").fadeIn(800)
	$(".modal h2").text('Você venceu!')
	$(".modal p").text('Parabéns ao grupo '+ grupoAtual.nome)
	$(".modal button:nth-of-type(1)").text("Fim de jogo").onclick =
	$(".modal button:nth-of-type(2)").remove()
	fimDeJogo = true
	setTimeout(function() {
		$(".overlay").fadeOut()
	}, 3800)
	window.localStorage.setItem("num_g", undefined)
}
