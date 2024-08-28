import { catchAsync } from "@/config";
import { VehicleService } from "@/service";
import httpStatus from "http-status";

export class VehicleController {
  private _vehicleService: VehicleService;
  constructor() {
    this._vehicleService = new VehicleService();
  }
  vehicleInjestion = catchAsync(async (req: any, res: any, next: any) => {
    res.status(httpStatus.OK).json({
      code: httpStatus.OK,
      message: "success",
      data: await this._vehicleService.vehicleInjestion(req.body),
    });
  });

  vehicleValuationRequest = catchAsync(
    async (req: any, res: any, next: any) => {
      res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: "success",
        data: await this._vehicleService.vehicleValuationRequest(req.query.vin),
      });
    }
  );
}
