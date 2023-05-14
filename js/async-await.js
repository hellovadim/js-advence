async function getProducts() {
	// fetch("https://jsonplaceholder.typicode.com/todos/")
	// .then(res => res.json())
	// .then((data) => console.log(data))
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
	const data = await res.json();
	console.log(data);
}

getProducts();
