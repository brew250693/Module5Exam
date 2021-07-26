import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  constructor(private bookService: BookService,
              private messageService: MessageService) { }

  ngOnInit(): void {

  }
  submit() {
    const book = this.bookForm.value;
    console.log(book);
    this.bookService.saveBook(book).subscribe(() => {
      this.messageService.add({ severity:'success', summary: 'Thông báo', detail: 'Thêm mới thành công'})
    })


      this.bookForm.reset();
  }
}
