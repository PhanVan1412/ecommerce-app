import { Component } from '@angular/core';
import { comments } from 'src/app/comments';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  comments = comments;
}
