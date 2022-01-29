import {Component, OnInit} from '@angular/core';
import {ProductModel, ProductType} from "./shared/model/product/product.model";
import {ProductService} from "./shared/services/product/product.service";
import {GetAllProductInput} from "./shared/model/product/get-all-product-input";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  products: ProductModel[] = [];

  getAllProductInput: GetAllProductInput = new GetAllProductInput();


  ngOnInit(): void {


    this.productService.getProducts(this.getAllProductInput).subscribe(x => {
      this.products = x;
    });

    /*    this.productService.getProductByProductType(ProductType.PrivateLessonMonthly).subscribe(x => {
          this.productsType = x;
        });*/
  }

  getFilteredProducts() {
    this.productService.getProducts(this.getAllProductInput).subscribe(x => {
      this.products = x;
    });

  }

}
