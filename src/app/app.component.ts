import {Component, OnInit} from '@angular/core';
import {ProductModel, ProductType} from "./shared/model/product/product.model";
import {ProductService} from "./shared/services/product/product.service";
import {GetAllProductInput} from "./shared/model/product/get-all-product-input";
import {StudentService} from "./shared/services/student/student.service";
import {GetAllStudentInput} from "./shared/model/student/get-all-student-input";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService, private studentService: StudentService) {
  }

  products: ProductModel[] = [];

  getAllProductInput: GetAllProductInput = new GetAllProductInput();

  singleProduct: ProductModel = new ProductModel();
  singleProductId: string = "";

  ngOnInit(): void {
    this.studentService.getAll(new GetAllStudentInput()).subscribe(x => {
      console.log(x);
    });

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

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe(product => {
      this.singleProduct = product;
    });
  }

}
