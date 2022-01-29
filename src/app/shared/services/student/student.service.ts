import { Injectable } from '@angular/core';
import {BaseService} from "../base/base.service";
import {StudentModel} from "../../model/student/student.model";
import {GetAllStudentInput} from "../../model/student/get-all-student-input";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<StudentModel, GetAllStudentInput>{

  constructor(public override http: HttpClient) {
    super(http);
    this.getallUrl="http://api.mat.goozifmedia.com/api/services/app/Student/GetAllasdasd";
    this.getUrl="http://api.mat.goozifmedia.com/api/services/app/Student/Get";
    this.deleteUrl="http://api.mat.goozifmedia.com/api/services/app/Student/Delete";
  }

}

