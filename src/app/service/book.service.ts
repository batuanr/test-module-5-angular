import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/Book';
import {environment} from '../../environments/environment.prod';
const API = environment.API;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBook(): Observable<Book[]>{
    return this.http.get<Book[]>(API);
  }
  create(book: Book): Observable<Book>{
    return this.http.post<Book>(API, book);
  }
  findById(id: number): Observable<Book>{
    return this.http.get<Book>(API + '/' + id);
  }

  update(id: number, book: Book): Observable<Book>{
    return this.http.put<Book>(API + '/' + id, book);
  }
  delete(id: number): Observable<Book>{
    return this.http.delete<Book>(API + '/' + id);
  }
}
