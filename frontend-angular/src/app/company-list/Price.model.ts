export class Price {
  public shomraComprehensive: number;
  public shomraCompulsory: number;
  public migdalComprehensive: number;
  public migdalCompulsory: number;
  public menoraComprehensive: number;
  public menoraCompulsory: number;
  public klalComprehensive: number;
  public klalCompulsory: number;

  constructor(
    shomraComprehensive: number,
    shomraCompulsory: number,
    migdalComprehensive: number,
    migdalCompulsory: number,
    menoraComprehensive: number,
    menoraCompulsory: number,
    klalComprehensive: number,
    klalCompulsory: number
  ) {
    this.shomraComprehensive = shomraComprehensive;
    this.shomraCompulsory = shomraCompulsory;
    this.migdalComprehensive = migdalComprehensive;
    this.migdalComprehensive = migdalComprehensive;
    this.menoraComprehensive = menoraComprehensive;
    this.menoraCompulsory = menoraCompulsory;
    this.klalComprehensive = klalComprehensive;
    this.klalCompulsory = klalCompulsory;
  }
}
