import {BaseEntityModel} from "./base-entity.model";

export class ProductModel extends BaseEntityModel {
  name?: string;
  price?: number;
  slug?: string;
  contentUrl?: string;
  productType?: number;
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
}


export class StudentModel extends BaseEntityModel {
  email?: string;
  name?: string;
  surname?: string;
  birthDay?: Date;
  school?: string;
  level?: number;
  city?: number;
  phone?: string;
  answers?: any[];
  answered?: boolean;
  consultancy?: boolean;
  consultancyMonthly?: boolean;
}

export class TeacherModel extends BaseEntityModel {
  email?: string;
  name?: string;
  surname?: string;
  imageUrl?: string;
  description?: string;
}


