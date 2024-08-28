import { Document, model, Schema } from "mongoose";
import Double from "mongodb";

export interface IVariation {
  vin: string;
  country: string;
  manufacturer: string;
  vehicle_model: string;
  class: string;
  region: string;
  wmi: string;
  vds: string;
  vis: string;
  year: string;
  maker:string;
}
export default interface IVariationModel extends Document, IVariation {}

const variationSchema = new Schema(
  {
    vin: { type: String, default: null },
    country: { type: String, default: null },
    manufacturer: { type: String, default: null },
    vehicle_model: { type: String, default: null },
    class: { type: String, default: null },
    region: { type: String, default: null },
    wmi: { type: String, default: null },
    vds: { type: String, default: null },
    vis: { type: String, default: null },
    maker: { type: String, default: null },
    year: { type: String, default: null },
  },
  { timestamps: true }
);

export const Variation = model<IVariationModel>("variation", variationSchema);
