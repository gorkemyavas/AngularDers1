import {PagedResultModel} from "./paged-result.model";

export class BaseModel<T> {
  result?: PagedResultModel<T> | T | null;
  targetUrl?: any;
  success?: boolean;
  error?: any;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;

  constructor() {
    this.result = null;
    this.targetUrl = "";
    this.success = false;
    this.error = false;
    this.unAuthorizedRequest = false;
    this.__abp = false;
  }
}


