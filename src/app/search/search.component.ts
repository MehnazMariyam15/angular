import { Component, OnInit } from '@angular/core';
import { products } from '../product/products';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../site/auth-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKey:string;
  prodList:string[];
  filteredProdList:string[];
  _productlist:products[];
  _filteredlist:products[];
  isAdmin:boolean;

  constructor(public productService: ProductServiceService, private router: Router,private authService:AuthServiceService) /* private menuItemService:MenuItemService */ { }

  ngOnInit() {    
    this.productService.setFlag(false);
    this.isAdmin = this.authService.isAdmin;
      this.productService.getAllProductTypes().subscribe(
        data =>{ this.prodList=data;
          this.filteredProdList=data; 
        }); 
        this.productService.getAllProducts().subscribe(data=>
          {this._filteredlist=data;
          this._productlist=data});
          this.router.navigate(['/search-bar']);
  }

  search() {
     
    this._filteredlist = this._productlist.filter(n => n.productName.toLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    //console.log(this.filteredProdList);
  }

  delete(code: string) {
    this.productService.deleteProduct(code).subscribe(
      data => { this.ngOnInit();
      }
    );
    
  }



 

}
