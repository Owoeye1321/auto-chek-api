import express from "express";
import vehicleRoutes from "./vehicle.route";
const routes = express.Router();
routes.use("/vehicle", vehicleRoutes);
export default routes;
