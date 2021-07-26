import { Component } from '@angular/core';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {BookService} from "./service/book.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'ExamModule5';
  constructor(private bookService: BookService,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig
  ) { }
  // ngOnInit() {
  //   this.primengConfig.ripple = true;
  // }
}
