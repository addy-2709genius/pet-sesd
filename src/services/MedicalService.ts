import { MedicalRepository } from "../repositories/MedicalRepository";
import { MedicalRecord, RecordType } from "../models/MedicalRecord";
import { v4 as uuid } from "uuid";

export class MedicalService {
  constructor(private repo: MedicalRepository) {}

  addRecord(
    petId: string,
    type: RecordType,
    description: string,
    date: Date,
    reminder?: Date
  ) {
    const record = new MedicalRecord(
      uuid(),
      petId,
      type,
      description,
      date,
      reminder
    );
    return this.repo.create(record);
  }

  getRecords(filters: any) {
    let data = this.repo.findAll();

    if (filters.petId) {
      data = data.filter(r => r.getDetails().petId === filters.petId);
    }

    if (filters.type) {
      data = data.filter(r => r.getDetails().type === filters.type);
    }

    if (filters.from && filters.to) {
      const from = new Date(filters.from);
      const to = new Date(filters.to);
      data = data.filter(r => {
        const d = r.getDetails().date;
        return d >= from && d <= to;
      });
    }

    return data;
  }

  upcomingReminders() {
    const today = new Date();
    return this.repo.findAll().filter(r => {
      const reminder = r.getDetails().nextReminder;
      return reminder && reminder >= today;
    });
  }
}
