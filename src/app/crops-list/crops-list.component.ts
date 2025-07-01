import { Component } from '@angular/core';
import { CropsService } from '../services/crops.service';

@Component({
  selector: 'app-crops-list',
  imports: [],
  templateUrl: './crops-list.component.html',
  styleUrl: './crops-list.component.css',
  providers:[CropsService]
})
export class CropsListComponent {
/**
 *
 */
constructor(private crops:CropsService) {
 
}
ngOnInit(){
  this.crops.getCrop().subscribe((data:any)=>{
console.log(data);
  });
}
}
