console.log(1);

setTimeout(() => {
	console.log(2);
}, 0);

///первый из асинхронных будет промис (micro task queue)
Promise.resolve(3).then((res) => {
	// даже внутри промиса если большое вычесление  setTimeout не сможет выполнится
	for (let i = 0; i++; i < 10000000) {}

	console.log(res);
});
console.log(4);

///Даже пока будет выполнятся этот большой цикл асинхронные операции не начнуться
for (let i = 0; i++; i < 10000000) {}
