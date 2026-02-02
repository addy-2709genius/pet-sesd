import { IRepository } from "../interfaces/IRepository";
import { MedicalRecord } from "../models/MedicalRecord";

export class MedicalRepository implements IRepository<MedicalRecord> {
  private records: MedicalRecord[] = [];

  create(record: MedicalRecord): MedicalRecord {
    this.records.push(record);
    return record;
  }

  findAll(): MedicalRecord[] {
    return this.records;
  }

  findById(id: string): MedicalRecord | null {
    return this.records.find(r => r.getId() === id) || null;
  }

  delete(id: string): boolean {
    const index = this.records.findIndex(r => r.getId() === id);
    if (index === -1) return false;
    this.records.splice(index, 1);
    return true;
  }
}
