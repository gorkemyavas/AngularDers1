import {BaseModel} from "./base.model";

export class Post extends BaseModel {

  userId: number;
  title: string;
  body: string;

  constructor() {
    super();
    this.userId = 0;
    this.title = "";
    this.body = "";
  }

}
