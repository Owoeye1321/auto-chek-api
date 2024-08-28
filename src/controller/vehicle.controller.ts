import { catchAsync } from "@/config";

export class VehicleController {
  vehicleInjestion = catchAsync(async (req: any, res: any, next: any) => {
    res.status().json({});
  });
}
