import { Request, Response } from "express";
import { MedicalService } from "../services/MedicalService";

export class MedicalController {
  constructor(private service: MedicalService) {}

  create = (req: Request, res: Response) => {
    const { petId, type, description, date, reminder } = req.body;
    const record = this.service.addRecord(
      petId,
      type,
      description,
      new Date(date),
      reminder ? new Date(reminder) : undefined
    );
    res.status(201).json(record.getDetails());
  };

  list = (req: Request, res: Response) => {
    const records = this.service.getRecords(req.query);
    res.json(records.map(r => r.getDetails()));
  };

  reminders = (_: Request, res: Response) => {
    const reminders = this.service.upcomingReminders();
    res.json(reminders.map(r => r.getDetails()));
  };
}
