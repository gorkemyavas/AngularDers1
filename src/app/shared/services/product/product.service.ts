import {Injectable} from '@angular/core';
import {BaseModel} from "../../model/base.model";
import {HttpClient} from "@angular/common/http";
import {ProductModel, ProductType} from "../../model/product/product.model";
import {Observable, Subject} from "rxjs";
import {PagedResultModel} from "../../model/paged-result.model";
import {StudentModel} from "../../model/student/student.model";
import {GetAllProductInput} from "../../model/product/get-all-product-input";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(getAllProductInput: GetAllProductInput): Observable<ProductModel[]> {
    let subject = new Subject<ProductModel[]>();

    var queryString = "";
    Object.keys(getAllProductInput).forEach(key => {
        //@ts-ignore
        if (getAllProductInput[key] != "") {
          //@ts-ignore
          if (typeof (getAllProductInput[key]) == 'object') {
            //@ts-ignore
            getAllProductInput[key].forEach(element => {
              queryString += key + '=' + element;
              queryString += '&';
            });
          } else {
            //@ts-ignore
            queryString += key + '=' + getAllProductInput[key];
          }
          queryString += '&'
        }
      }
    );


    this.http.get<BaseModel<ProductModel>>('http://api.mat.goozifmedia.com/api/services/app/Product/GetAll?'+
      queryString

    ).subscribe(productsFromBackend => {
      subject.next((productsFromBackend.result as PagedResultModel<ProductModel>).items);
    });

    return subject.asObservable();
  }

  getProduct(id:string): Observable<ProductModel>{
    let subject = new Subject<ProductModel>();
    this.http.get<BaseModel<ProductModel>>('http://api.mat.goozifmedia.com/api/services/app/Product/Get?Id='+id).subscribe(productsFromBackend => {
      subject.next((productsFromBackend.result as ProductModel));
    });
    return subject.asObservable();
  }


}
