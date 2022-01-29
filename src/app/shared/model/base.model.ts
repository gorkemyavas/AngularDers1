import {IEntity} from "../interface/ientity";


export class BaseModel {
  result?: PagedResultModel | IEntity | null;
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




export class PagedResultModel {
  totalCount?: number;
  items?: IEntity[];

  constructor() {
    this.totalCount = 0;
    this.items = [];
  }
}
