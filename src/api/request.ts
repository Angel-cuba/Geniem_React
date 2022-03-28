export const Reader = async () => await fetch('http://jsonplaceholder.typicode.com/photos');

export const ReaderById = async (id: string | undefined) =>
	await fetch(`http://jsonplaceholder.typicode.com/photos/${id}`);
