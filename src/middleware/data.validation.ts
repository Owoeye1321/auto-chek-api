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
      year: joi.number().required(),
      amount: joi.number().required(),
      maker: joi.string().required(),
      name: joi.string().required(),
      engine: joi.string().required(),
      transmission: joi.string().required(),
      fuel_type: joi.string().required(),
      interior_color: joi.string().required(),
      exterior_color: joi.string().required(),
      vehicle_id: joi.string().required(),
      mileage: joi.number().required(),
    });

    const data = await vehicleInjestionValidation.validateAsync(req.body);
    if (data) next();
  } catch (error) {
    next(error);
  }
};

export const vehicleValuationRequestDataValidation = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const vehicleValuationRequestDataValidation = joi.object({
      vin: joi.string().required(),
    });
    const data = await vehicleValuationRequestDataValidation.validateAsync(
      req.query
    );
    if (data) next();
  } catch (error) {
    next(error);
  }
};
