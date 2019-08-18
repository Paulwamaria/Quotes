export class Quotes {
  showDescription: boolean;
  // tslint:disable-next-line: max-line-length
  constructor(public id: number, public name: string, public description: string, public authorName: string, public upVot: number, public downVot: number, public submitterName: string, public submitDate: Date ) {
    this.showDescription = false;
  }
}
