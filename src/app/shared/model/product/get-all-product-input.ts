import {LessonType, LevelType, ProductType} from "./product.model";

export class GetAllProductInput{

/*  productType:ProductType; //camel-case
  productType2:ProductType;
  lessonType:LessonType;
  searchText:String;
  teacherId:number;*/

  productType: ProductType | string;
  productType2: ProductType | string;
  lessonType: LessonType | string;
  searchText: string;
  teacherId: number | string;
  date: string | string;
  levelTypes: (LevelType | null)[]|string;
  isSold: boolean | string;
  sorting: string | string;
  skipCount: number | string;
  maxResultCount: number | string;


  constructor() {
    this.productType = "";
    this.productType2 = "";
    this.lessonType = "";
    this.searchText = "";
    this.teacherId = "";
    this.date = "";
    this.levelTypes ="";
    this.isSold = "";
    this.sorting = "";
    this.skipCount = "";
    this.maxResultCount = 200;
  }
}
