import express from "express";
import { VehicleController } from "@/controller";
const router = express.Router();

const { vehicleInjestion } = new VehicleController();
router.post("/", vehicleInjestion);
export default router;
