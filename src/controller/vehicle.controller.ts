import { catchAsync } from "@/config";
import { VehicleService } from "@/service";
import httpStatus from "http-status";

export class VehicleController {
  private _vehicleService: VehicleService;
  constructor() {
    this._vehicleService = new VehicleService(); //this initializes the vehicle service class
  }
  /**
   * this controller is wrapped by the catch async function that catch error
   * it's the controller that handle vehicle injestion
   */
  vehicleInjestion = catchAsync(async (req: any, res: any, next: any) => {
    res.status(httpStatus.OK).json({
      code: httpStatus.OK,
      message: "success",
      data: await this._vehicleService.vehicleInjestion(req.body),
    });
  });

  /**
   * this controller is wrapped by the catch async function that catch error
   * it's the controller that handle vehicle valuation request
   * this checks if the vin data is available in the vehicle valuation model or make a new request to vin lookup
   */
  vehicleValuationRequest = catchAsync(
    async (req: any, res: any, next: any) => {
      res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: "success",
        data: await this._vehicleService.vehicleValuationRequest(req.query.vin),
      });
    }
  );

  /**
   * this controller is wrapped by the catch async function that catch error
   * it's the controller that handle viewing single or all vehicles
   */
  viewVehicle = catchAsync(async (req: any, res: any, next: any) => {
    res.status(httpStatus.OK).json({
      code: httpStatus.OK,
      message: "success",
      data: await this._vehicleService.viewVehicles(req.query.vehicleId),
    });
  });
}
