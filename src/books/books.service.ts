import { Injectable, Delete } from '@nestjs/common';
import { Book } from './interfaces/books.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = []; //fake database

  private findId(id: number): number {
    let myIndex: number;

    this.books.forEach(function (book: Book, index: number) {
      if (book.book_id === id) {
        myIndex = index;
      }
    })
    return myIndex
  }

  createBook(infoBook) {
    let lastId: number;

    function addId(matrixBooks): number {
      if (matrixBooks.length > 0) {
        lastId = matrixBooks[matrixBooks.length - 1].book_id + 1;
        return lastId;
      } else {
        return (lastId = 1);
      }
    }

    const newBook = {
      book_id: addId(this.books),
      ...infoBook
    };

    this.books.push(newBook);

  }

  getAllBooks(): Book[] {
    return this.books;
  }

  infoBook(id: number): Book {
    return this.books[this.findId(id)];
  }

  updateBook(id: number, infoBook: Book): Book {
    const myIndex = this.findId(id);
    this.books.splice(myIndex, 1, infoBook); // 1 = how much elemets I want edit
    return this.books[myIndex];
  }

  deleteBook(id: number){
    const myIndex = this.findId(id);
    this.books.splice(myIndex, 1); // 1 = how much elemets I want edit
  }
}
