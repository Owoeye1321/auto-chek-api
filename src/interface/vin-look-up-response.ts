/**
 * this is the interface for the response coming from the vin lookup from sky scanner
 */
export interface IVinLookUpResponse {
  vin:string;
  country:string;
  manufacturer:string;
  model:string;
  class:string;
  region:string;
  wmi:string;
  vds:string;
  vis:string;
  year:string;
}