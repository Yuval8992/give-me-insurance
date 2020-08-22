export class Car {
  public vehicleNumber: number;
  public modelCode: number;
  public year: number;
  public description: string;
  public dateOnRoad: string;
  public air_bags: number;
  public esp: string;
  public fcw: string;
  public ldw: string;
  public gear_type: string;

  constructor(
    vehicleNumber: number,
    modelCode: number,
    year: number,
    description: string,
    dateOnRoad: string,
    air_bags: number,
    esp: string,
    fcw: string,
    ldw: string,
    gear_type: string
  ) {
    this.vehicleNumber = vehicleNumber;
    this.modelCode = modelCode;
    this.year = year;
    this.description = description;
    this.dateOnRoad = dateOnRoad;
    this.air_bags = air_bags;
    this.esp = esp;
    this.fcw = fcw;
    this.ldw = ldw;
    this.gear_type = gear_type;
  }
}
