import { Component } from '@angular/core';
import { filters } from 'src/app/category-filter';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent {
  filters = filters;
}
