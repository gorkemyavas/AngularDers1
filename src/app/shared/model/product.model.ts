import {BaseEntityModel} from "./base-entity.model";
import {TeacherModel} from "./teacher.model";
import {StudentModel} from "./student.model";

export class ProductModel extends BaseEntityModel {
  name?: string;
  price?: number;
  slug?: string;
  contentUrl?: string;
  productType: ProductType;
  lessonType?: null;
  level?: number | null;
  imgUrl?: string;
  description?: string;
  date?: Date;
  isSold?: boolean;
  teacherId?: number;
  teacher?: TeacherModel | null;
  studentId?: number | null;
  student?: StudentModel | null;
  contentId?: null;
  content?: null;
  products?: null;
  constructor() {
    super();
    this.productType=ProductType.PrivateLesson;

  }
}

export enum ProductType{
  PrivateLesson = 0,
  VideoLesson = 1,
  Resource = 2,
  Packet = 3,
  PrivateLessonMonthly = 4,
  Consultancy=5,
  ConsultancyMonthly=6
}







