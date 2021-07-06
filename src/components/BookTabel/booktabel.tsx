import { Header } from "../header";
import styles from '../BookTabel/booktabel.module.scss';
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import BookItem from "../BookItem";

interface BooksProps {
  id: number;
  isbn: string;
  author: string;
  title: string;
}
export function BookTabel() {
  const [books, setBooks] = useState<BooksProps[]>([]);
  useEffect(() => {
    api.get('books').then(response => {
      setBooks(response.data);
    });
  }, []);

  function handleDeleteBook() {

  }


  return (
    <div className={styles.container}>
      <Header />
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Titulos</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <BookItem id={book.id} isbn={book.isbn} author={book.author} title={book.title} handleDeleteBook={handleDeleteBook} />
          ))}
        </tbody>
      </table>
      <footer>A quantidade total de livros é: {books.length}</footer>
    </div>
  );
}