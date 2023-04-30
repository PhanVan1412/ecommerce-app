import { Component } from '@angular/core';
import { cateroryListLeft, cateroryListRight} from 'src/app/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryListLeft = cateroryListLeft;
  cateroryListRight = cateroryListRight;
}
