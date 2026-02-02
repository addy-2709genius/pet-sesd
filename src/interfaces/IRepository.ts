export interface IRepository<T> {
  create(item: T): T;
  findAll(): T[];
  findById(id: string): T | null;
  delete(id: string): boolean;
}
