export class BaseModel{
  id : number;
  createdDate: Date;

   constructor() {
     this.id=0;
     this.createdDate=new Date();
   }

}
