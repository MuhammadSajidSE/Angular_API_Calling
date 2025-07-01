import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CropsListComponent } from './crops-list/crops-list.component';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';
import { SearchCropComponent } from './search-crop/search-crop.component';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  imports: [CustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAPICalling';
}
