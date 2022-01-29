import {BaseEntityModel} from "../base-entity.model";

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
