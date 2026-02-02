import { BaseModel } from "./BaseModel";

export type RecordType = "VACCINATION" | "CHECKUP" | "MEDICATION" | "ALLERGY";

export class MedicalRecord extends BaseModel {
  private petId: string;
  private type: RecordType;
  private description: string;
  private date: Date;
  private nextReminder?: Date;

  constructor(
    id: string,
    petId: string,
    type: RecordType,
    description: string,
    date: Date,
    nextReminder?: Date
  ) {
    super(id);
    this.petId = petId;
    this.type = type;
    this.description = description;
    this.date = date;
    this.nextReminder = nextReminder;
  }

  getDetails() {
    return {
      id: this.id,
      petId: this.petId,
      type: this.type,
      description: this.description,
      date: this.date,
      nextReminder: this.nextReminder
    };
  }
}
