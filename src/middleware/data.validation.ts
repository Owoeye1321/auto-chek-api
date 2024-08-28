import joi from "joi";

/**
 *
 * @param req
 * @param res
 * @param next
 * this middleware handle the vehicle injestion validation
 */
export const validateVehicleDataInjection = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const vehicleInjestionValidation = joi.object({
      vin: joi.string().required(),
      country: joi.string().required(),
      manufacturer: joi.string().required(),
      vehicle_model: joi.string().required(),
      class: joi.string().required(),
      region: joi.string().required(),
      wmi: joi.string().required(),
      vds: joi.string().required(),
      vis: joi.string().required(),
      year: joi.string().required(),
      maker: joi.string().required(),
    });

    const data = await vehicleInjestionValidation.validateAsync(req.body);
    if (data) next();
  } catch (error) {
    next(error);
  }
};
