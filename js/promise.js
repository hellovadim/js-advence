//Контейнер для возвращения вернёться в будущем
///Pending
//Fulfield
//Rejected
// const url = "https://dummyjson.com/products";

// const res = fetch(url)
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));
// fetch(url)
// 	.then((response) => response.json())
// 	.then(({ products }) => {
// 		console.log(products);
// 		return fetch(url + "/" + products[0].id);
// 	})
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));
// fetch(url + 5)
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))
// 	.catch((e) => console.log(e))
// 	.finally(() => console.log("Finally"));

const prom = new Promise((resolve, reject) => {
	if (new Date() < new Date("01/01/2024")) {
		reject(new Error("Error"));
	}
	resolve("Success");
});

prom.then((data) => console.log(data)).catch((err) => console.log(err));

function timeout(sec) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, sec * 1000);
	});
}

timeout(1)
	.then(() => console.log(1))
	.then(() => timeout(1))
	.then(() => console.log(1));
