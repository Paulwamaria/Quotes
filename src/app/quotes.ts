export class Quotes {
  showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public author: string, public upVot: number, public downVot: number, public submiterName: string, public submitDate: Date ) {
    this.showDescription = false;
  }
}
