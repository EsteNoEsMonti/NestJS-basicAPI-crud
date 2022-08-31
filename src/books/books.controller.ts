import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBookDto } from './dto/createBook.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/books.interface';

@Controller('books')
export class BooksController {

  // constructor to services
  constructor(private BooksService: BooksService) { }

  @Get() // metodo http que queremos configurar
  getBooks(): Book[] {
    return this.BooksService.getAllBooks();
  }

  @Get(':id')
  infoBooks(@Param('id') id: string): Book {
    return this.BooksService.infoBook(parseInt(id));
  }

  @Post()
  createBook(@Body() infoBook: CreateBookDto) {
    // console.log(infoBook);
    // return `new book has created 📘👌
    // Name: ${infoBook.name},
    // Author: ${infoBook.author}`;
    this.BooksService.createBook(infoBook);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateBook1: Book): Book {
    return this.BooksService.updateBook(parseInt(id), updateBook1);
  }

  @Delete(':id')
  deleteBook(@Param('id') id:string): string {
    this.BooksService.deleteBook(parseInt(id));
    return `the book #${id} has deleted.`;
  }

}
