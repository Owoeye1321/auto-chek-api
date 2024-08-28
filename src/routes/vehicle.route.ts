import express from "express";
import { VehicleController } from "@/controller";
import { validateVehicleDataInjection } from "@/middleware";
import { vehicleValuationRequestDataValidation } from "@/middleware/data.validation";
const router = express.Router();

const { vehicleInjestion, vehicleValuationRequest, viewVehicle } =
  new VehicleController();
router.post("/", validateVehicleDataInjection, vehicleInjestion);
router.get("/", viewVehicle);
router.get(
  "/valuation",
  vehicleValuationRequestDataValidation,
  vehicleValuationRequest
);
export default router;
