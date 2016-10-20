export class Match {

  public id: number;

  constructor(
    public name: string,
    public startDate: Date,
    public endDate: Date,
    public gamesPerSet: number,
    public playerIDs: number[]
  ) { }
}
