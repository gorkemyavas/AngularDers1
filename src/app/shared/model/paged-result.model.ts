export class PagedResultModel<T> {
    totalCount?: number;
  items: T[];

  constructor() {
    this.totalCount = 0;
    this.items = [];
  }
}
