import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/Book';
import {MatTableDataSource} from '@angular/material/table';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'description', 'edit', 'delete'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  books: Book[] = [];
  status: any;

  constructor(
    private bookService: BookService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void{
    this.bookService.getAllBook().subscribe(data => {
      this.books = data;
      this.dataSource = new MatTableDataSource<Book>(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }
  delete(id: number): void{
    this.bookService.delete(id).subscribe(() => {
      this.getAll();
    });
  }
  openDialog(id: number): any {
    const dialog = this.dialog.open(DialogComponent);
    dialog.afterClosed().subscribe(result => {
      if (result){
        this.delete(id);
      }
    });
  }

}
