var GLOBAL_QTD = 0;
var GLOBAL_GROUP_CURRENT;
var groups     = [];


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
