import { Router } from "express";
import { MedicalRepository } from "../repositories/MedicalRepository";
import { MedicalService } from "../services/MedicalService";
import { MedicalController } from "../controllers/MedicalController";

const router = Router();

const repo = new MedicalRepository();
const service = new MedicalService(repo);
const controller = new MedicalController(service);

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/reminders", controller.reminders);

export default router;
