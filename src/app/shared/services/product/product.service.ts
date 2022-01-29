import {Injectable} from '@angular/core';
import {BaseModel} from "../../model/base.model";
import {HttpClient} from "@angular/common/http";
import {ProductModel, ProductType} from "../../model/product.model";
import {Observable, Subject} from "rxjs";
import {PagedResultModel} from "../../model/paged-result.model";
import {StudentModel} from "../../model/student.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductModel[]> {
    let subject = new Subject<ProductModel[]>();
    this.http.get<BaseModel<ProductModel>>('http://api.mat.goozifmedia.com/api/services/app/Product/GetAll').subscribe(productsFromBackend => {
      subject.next((productsFromBackend.result as PagedResultModel<ProductModel>).items);
    });
    return subject.asObservable();
  }

  getProductByProductType(productType : ProductType): Observable<ProductModel[]> {
    let subject = new Subject<ProductModel[]>();
    this.http.get<BaseModel<ProductModel>>('http://api.mat.goozifmedia.com/api/services/app/Product/GetAll?ProductType='+ productType+'&MaxResultCount=200').subscribe(productsFromBackend => {
      subject.next((productsFromBackend.result as PagedResultModel<ProductModel>).items);
    });
    return subject.asObservable();
  }
  getProductBySearchText(searchText : string): Observable<ProductModel[]> {
    let subject = new Subject<ProductModel[]>();
    this.http.get<BaseModel<ProductModel>>('http://api.mat.goozifmedia.com/api/services/app/Product/GetAll?SearchText='+ searchText+'&MaxResultCount=200').subscribe(productsFromBackend => {
      subject.next((productsFromBackend.result as PagedResultModel<ProductModel>).items);
    });
    return subject.asObservable();
  }




}
