export class Company {
  public imageUrl: string;
  public plan: string;
  public comprehensiveInsurance: number;
  public compulsoryInsurance: number;
  public total: number;

  constructor(
    imageUrl: string,
    plan: string,
    comprehensiveInsurance: number,
    compulsoryInsurance: number,
    total: number
  ) {
    this.imageUrl = imageUrl;
    this.plan = plan;
    this.comprehensiveInsurance = comprehensiveInsurance;
    this.compulsoryInsurance = compulsoryInsurance;
    this.total = total;
  }
}
