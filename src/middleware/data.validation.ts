import { Vehicle } from "@/model/vehicle.model";
import httpStatus from "http-status";
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
    if (data) {
      if (data) {
        if (
          await Vehicle.findOne({
            $or: [{ vehicle_id: req.body.vehicle_id }, { vin: req.body.vin }],
          })
        )
          res
            .status(httpStatus.BAD_REQUEST)
            .json({
              code: httpStatus.BAD_REQUEST,
              message: "Vehicle detail already exist",
            });
        next();
      }
      next();
    }
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param req
 * @param res
 * @param next
 * this middleware handle the vehicle valuation request validation
 */

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

/**
 *
 * @param req
 * @param res
 * @param next
 * this middleware handle the loan submission valuation
 */
export const loanSubmissionValidation = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const loanSubmissionValidation = joi.object({
      first_name: joi.string().required(),
      last_name: joi.string().required(),
      date_of_birth: joi.string().required(),
      email_address: joi.string().required(),
      phone: joi.string().required(),
      nim: joi.string().required(),
      awareness_note: joi.string().required(),
      bnv: joi.string().required(),
      nationality: joi.string().required(),
      gender: joi.string().required(),
      national_status: joi.string().required(),
      profession: joi.string().required(),
      desired_equity_contribution: joi.string().required(),
      desired_monthly_payment: joi.string().required(),
      interest_rate_type: joi.string().required(),
      desired: joi.string().required(),
      balloon_percentage: joi.string().required(),
      desired_loan_term: joi.string().required(),
      desired_repayment_date: joi.string().required(),
      roadworthiness: joi.string().required(),
      licence_renewal: joi.string().required(),
      fee_payment_type: joi.string().required(),
    });
    const data = await loanSubmissionValidation.validateAsync(req.body);
    if (data) next();
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param req
 * @param res
 * @param next
 * this middleware handle the update loan status valuation
 */
export const updateLoanStatusValidation = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const vehicleValuationRequestDataValidation = joi.object({
      status: joi.string().required(),
      loanId: joi
        .string()
        .pattern(/^[a-fA-F0-9]{24}$/)
        .required(),
    });
    const data = await vehicleValuationRequestDataValidation.validateAsync({
      ...req.query,
      ...req.body,
    });
    if (data) next();
  } catch (error) {
    next(error);
  }
};
