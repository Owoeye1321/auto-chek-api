import express from "express";
import { VehicleController } from "@/controller";
import { validateVehicleDataInjection } from "@/middleware";
const router = express.Router();

const { vehicleInjestion } = new VehicleController();
router.post("/", validateVehicleDataInjection, vehicleInjestion);
export default router;
