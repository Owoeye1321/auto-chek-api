import express from "express";
import vehicleRoutes from "./vehicle.route";
import loanRoutes from "./loan.route";
const routes = express.Router();
routes.use("/vehicle", vehicleRoutes);
routes.use("/loan", loanRoutes);
export default routes;
