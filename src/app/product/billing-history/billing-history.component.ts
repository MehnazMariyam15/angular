import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServiceService } from 'src/app/site/user-service.service';
import { PurchaseHistory } from '../purchaseHistory';

@Component({
  selector: 'app-billing-history',
  templateUrl: './billing-history.component.html',
  styleUrls: ['./billing-history.component.css']
})
export class BillingHistoryComponent implements OnInit {

  adminList:PurchaseHistory[];
  filteredList: PurchaseHistory[];
  searchDate: Date;

  constructor(private productService:ProductServiceService,private userService:UserServiceService) { }

  ngOnInit() {
    this.productService.getBill(this.userService.userId).subscribe(
      data =>{
      this.adminList=data;
      this.filteredList=data;
      console.log(this.adminList);
      
      });
  }

  searchByDate() {

    if(this.searchDate.toLocaleString().length == 0) {
      this.filteredList=this.adminList;
    }
    else { 
    this.filteredList = this.adminList.filter(n =>this.searchDate.toLocaleString().match(n.billingDate.toLocaleString()));
    console.log(this.filteredList);
    }
  }

}
