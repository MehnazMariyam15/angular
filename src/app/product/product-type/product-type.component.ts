import { Component, OnInit, Input } from '@angular/core';
import { products } from '../products';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {

  @Input() list:string;
  itemsList:products[];
  filteredProdList:products[];
  
  constructor(private productService: ProductServiceService, private router: Router) { }

  ngOnInit(){ 
    //console.log("type")
    
  }

  products(type: string) {
    this.productService.setFlag(true);
    console.log("in function");
    this.productService.getAllProductsList(type).subscribe(
      data => { this.itemsList=data;
      }
    );
  }
}
