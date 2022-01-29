import {IEntity} from "../interface/ientity";

export class BaseEntityModel implements IEntity {
  id?: number;
  isDeleted?: boolean;
  deleterUserId?: null;
  deletionTime?: null;
  lastModificationTime?: Date | null;
  lastModifierUserId?: number | null;
  creationTime?: Date;
  creatorUserId?: number;
}
