import { ApiError, rapidApi } from "@/config";
import { IVinLookUpResponse } from "@/interface";
import { Valuation } from "@/model/valuation.model";
import { IVehicle, Vehicle } from "@/model/vehicle.model";
import axios from "axios";
import httpStatus from "http-status";
import joi from "joi";
import { Schema } from "mongoose";

export class VehicleService {
  vehicleInjestion = async (payload: IVehicle): Promise<IVehicle> => {
    try {
      return await Vehicle.create(payload);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
  vehicleValuationRequest = async (
    vin: string
  ): Promise<IVinLookUpResponse> => {
    try {
      let response: IVinLookUpResponse;
      response = await Valuation.findOne({ vin }); //this check if the vehicle valuation data exist before making a new request to sky scanner
      if (!response) {
        response = await axios
          .get(`${rapidApi.rapid_api_host}/vinlookup?vin=${vin}`, {
            headers: {
              "Content-Type": "application/json",
              "x-rapidapi-key": rapidApi.rapid_api_key,
            },
          })
          .then(async (data: any) => {
            await Valuation.create(data.data);
            return data.data;
          })
          .catch((error: any) => {
            throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
          });
      }
      return response;
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };

  viewVehicles = async (
    vehicleId?: Schema.Types.ObjectId
  ): Promise<IVehicle | IVehicle[]> => {
    try {
      if (vehicleId) {
        const validaiton = joi.object({
          vehicleId: joi
            .string()
            .pattern(/^[a-fA-F0-9]{24}$/)
            .required(),
        });
        await validaiton.validateAsync({ vehicleId });
      }
      if (vehicleId) {
        if (!(await Vehicle.findById(vehicleId)))
          throw new ApiError(httpStatus.BAD_REQUEST, "Invalid vehicleId");
        return await Vehicle.findById(vehicleId);
      }
      return await Vehicle.find();
    } catch (error) {
      console.log(error);
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
}
