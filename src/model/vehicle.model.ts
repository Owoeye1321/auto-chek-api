import { Document, model, Schema } from "mongoose";
import Double from "mongodb";

export interface IVehicle {
  name: string;
  engine: string;
  transmission: string;
  fuel_type: string;
  interior_color: string;
  exterior_color: string;
  vin: string;
  vehicle_id: string;
  amount: string;
  maker: string;
  vehicle_model: string;
  year: number;
  country: string;
  class: string;
  mileage: number;
  region:string;
  manufacturer: string;
  wmi: string;
  vds: string;
  vis: string;
}
export default interface IVehicleModel extends Document, IVehicle {}

const vehicleSchema = new Schema(
  {
    name: { type: String, default: null },
    engine: { type: String, default: null },
    transmission: { type: String, default: null },
    fuel_type: { type: String, default: null },
    interior_color: { type: String, default: null },
    exterior_color: { type: String, default: null },
    vin: { type: String, default: null },
    class: { type: String, default: null },
    vehicle_id: { type: String, default: null },
    amount: { type: Number, default: null },
    manufacturer: { type: String, default: null },
    maker: { type: String, default: null },
    country: { type: String, default: null },
    rejion: { type: String, default: null },
    vehicle_model: { type: String, default: null },
    year: { type: Number, default: null },
    mileage: { type: Number, default: null },
    wmi: { type: String, default: null },
    vds: { type: String, default: null },
    vis: { type: String, default: null },
  },
  { timestamps: true }
);

export const Vehicle = model<IVehicleModel>("vehicle", vehicleSchema);
