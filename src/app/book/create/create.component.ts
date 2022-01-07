import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/Book';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: any = {};
  book: Book;
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngSubmit(): any {
    this.book = new Book(
      this.form.title,
      this.form.author,
      this.form.description
    );
    this.bookService.create(this.book).subscribe(() => {
      this.router.navigate(['']);
      Swal.fire('create success');
    });
  }

  cancel(): any {
    this.router.navigate(['']);
  }
}
