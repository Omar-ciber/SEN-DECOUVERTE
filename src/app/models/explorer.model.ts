// zone-touristique.model.ts
export class ExplorerZone {
  constructor(
    public id: number,
    public nom: string,
    public description: string,
    public image: string,
    public details: string
  ) {}
}
