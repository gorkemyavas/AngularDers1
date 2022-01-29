import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GetAllProductInput} from "../../model/product/get-all-product-input";
import {Observable, Subject} from "rxjs";
import {ProductModel} from "../../model/product/product.model";
import {BaseModel} from "../../model/base.model";
import {PagedResultModel} from "../../model/paged-result.model";

@Injectable({
  providedIn: 'root'
})
export class BaseService<Model, GetAll> {

  public getallUrl = "";
  public getUrl = "";
  public deleteUrl = "";


  constructor(public http: HttpClient) {
  }

  getAll(getAllInput: GetAll): Observable<Model[]> {
    let subject = new Subject<Model[]>();

    var queryString = "";
    Object.keys(getAllInput).forEach(key => {
        //@ts-ignore
        if (getAllInput[key] != "") {
          //@ts-ignore
          if (typeof (getAllInput[key]) == 'object') {
            //@ts-ignore
            getAllInput[key].forEach(element => {
              queryString += key + '=' + element;
              queryString += '&';
            });
          } else {
            //@ts-ignore
            queryString += key + '=' + getAllInput[key];
          }
          queryString += '&'
        }
      }
    );


    this.http.get<BaseModel<Model>>(this.getallUrl + '?' +
      queryString
    ).subscribe(x => {
      subject.next((x.result as PagedResultModel<Model>).items);
    }, error => {

    });

    return subject.asObservable();
  }

  get(id: string): Observable<Model> {
    let subject = new Subject<Model>();
    this.http.get<BaseModel<Model>>(this.getUrl + '?Id=' + id).subscribe(productsFromBackend => {
      subject.next((productsFromBackend.result as Model));
    });
    return subject.asObservable();
  }

  delete(id: string): void {
    this.http.delete<BaseModel<null>>(this.deleteUrl + '?Id=' + id).subscribe(productsFromBackend => {
    });

  }




}
