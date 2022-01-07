import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/Book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book;
  constructor(
    private bookService: BookService,
    private atRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe( param => {
      // @ts-ignore
      const id = + param.get('id');
      this.bookService.findById(id).subscribe(data => {
        console.log(data)
        this.book = data;
      });
    });
  }

}
