///Конкурентность - за промежуток времени выполнится N задач
///Паралельность - выполниться кем - то ещё
///Многопоточность - способ конкурентного выполнения выделением рабочих потоков
///Ассинхронность - передача операций для выполнения на стороне

///Запросы на сервер

///XMLHtttpRequest

const url = "https://dummyjson.com/products";

const request = new XMLHttpRequest();
request.open("OPEN", url, { mode: "no-cors" });
request.send();

request.onload = function () {
	console.log(this.responseText);
};
// request.addEventListener("load", function () {
// 	console.log(this.responseXML);
// });
// console.log(window.location.href);
// const params = new URLSearchParams(window.location.search);
// console.log(params.get("r"));
