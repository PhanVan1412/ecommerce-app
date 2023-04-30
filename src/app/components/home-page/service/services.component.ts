import { Component } from '@angular/core';
import  { serviceList } from 'src/app/content'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  serviceList = serviceList;
}
