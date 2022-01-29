import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./shared/model/post.model";
import {ProductModel} from "./shared/model/product.model";
import {BaseModel} from "./shared/model/base.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  productModel : ProductModel = new ProductModel();


  constructor(private http : HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<BaseModel>('http://api.mat.goozifmedia.com/api/services/app/Product/GetAll').subscribe(products =>{
      console.log(products);
     // this.posts =postsFromBackend;

    });

  }

}
