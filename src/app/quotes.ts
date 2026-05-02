export class Quotes {
  showDescription: boolean;

  constructor(public id: number, public name: string, public description: string, public authorName: string, public upVot: number, public downVot: number, public submitterName: string, public submitDate: Date ) {
    this.showDescription = false;
  }
}
