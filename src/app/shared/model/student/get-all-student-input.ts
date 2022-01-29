
export class GetAllStudentInput{

/*  productType:ProductType; //camel-case
  productType2:ProductType;
  lessonType:LessonType;
  searchText:String;
  teacherId:number;*/

  sorting: string | string;
  skipCount: number | string;
  maxResultCount: number | string;


  constructor() {
    this.sorting = "";
    this.skipCount = "";
    this.maxResultCount = 200;
  }
}
