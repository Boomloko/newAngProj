import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  newComment: string;
  constructor() { }

  ngOnInit() {
  }
  @Input() article: any;
  sendComment() {
    this.article.comment = this.newComment
  }
}

