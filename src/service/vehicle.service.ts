import { ApiError } from "@/config";
import { IVehicle, Vehicle } from "@/model/vehicle.model";
import httpStatus from "http-status";

export class VehicleService {
  vehicleInjestion = async (payload: IVehicle): Promise<IVehicle> => {
    try {
      return await Vehicle.create(payload);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
}
