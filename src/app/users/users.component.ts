import { Component } from '@angular/core';
import { CropsService } from '../services/crops.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [CropsService]
})
export class UsersComponent {
  public Users: any;
  constructor(private crop2x: CropsService) {

  }
  // ngOnInit(){
  //   this.Users= this.crop2x.getUser();
  //   console.log(this.Users);
  // }

  ngOnInit() {
    this.crop2x.getUser().subscribe((data: any) => {
      this.Users = data["$values"];
      // console.log(this.Users["$values"]);
    });
  }
}
