import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../model/Book';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  book: Book;
  constructor(
    private atRouter: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe( param => {
      // @ts-ignore
      const id = + param.get('id');
      this.bookService.findById(id).subscribe(data => {
        this.book = data;
      });
    });
  }

  ngSubmit(): any {
    this.bookService.update(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['']);
      Swal.fire('update success');
    });
  }
  cancel(): any {
    this.router.navigate(['']);
  }
}
