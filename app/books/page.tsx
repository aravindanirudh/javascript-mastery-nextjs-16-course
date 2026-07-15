async function Page() {
    const response = await fetch('http://localhost:3000/api/books');
    const books = await response.json();

  return (
    <div>
        {books.map((book: { id: number; title: string; author: string }) => (
            <div key={book.id}>
                <h2>ID: {book.id}</h2>
                <h2>Title: {book.title}</h2>
                <p>Author: {book.author}</p>
                <br/>
            </div>
        ))}
    </div>
  )
}

export default Page