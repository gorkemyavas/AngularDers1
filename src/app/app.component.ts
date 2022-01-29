import {Component, OnInit} from '@angular/core';
import {ProductModel, ProductType} from "./shared/model/product.model";
import {ProductService} from "./shared/services/product/product.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  products : ProductModel[] = [];
  productsType : ProductModel[] = [];
  productsSearchText : ProductModel[] = [];

  searchText:string="";


  ngOnInit(): void {

    this.productService.getProducts().subscribe(x => {
      this.products = x;
    });

    this.productService.getProductByProductType(ProductType.PrivateLessonMonthly).subscribe(x => {
      this.productsType = x;
    });
  }

  getProductBySearchText(){
    this.productService.getProductBySearchText(this.searchText).subscribe(x => {
      this.productsSearchText = x;
    });

  }

}
