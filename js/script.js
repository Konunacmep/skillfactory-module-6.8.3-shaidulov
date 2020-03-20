//Переменная для беспричинной траты памяти (можно было взять из свойства width прогрессбара)
let pbarValue = 0;
//Функция, первая, она же вторая, она же третья
function btnProc (event) {
	//прибавляем чуть-чуть разное значение для чуть-чуть разных кнопок, сгенерировавших событие
	pbarValue = (pbarValue + event.currentTarget.name*1) > 100 ?
				100 :
				pbarValue + event.currentTarget.name*1;
	$(".progress-bar").attr("aria-valuenow", pbarValue)
		.css("width", pbarValue + "%")
		.html(pbarValue);
}

$(document).ready(init);
//обработчик на клик кнопок
function init() {
  $(".btn").click(btnProc);
}