import {BaseEntityModel} from "./base-entity.model";

export class TeacherModel extends BaseEntityModel {
  email?: string;
  name?: string;
  surname?: string;
  imageUrl?: string;
  description?: string;
}
