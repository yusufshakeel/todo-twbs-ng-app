export class TodoModel {
  constructor(
    public title: string,
    public description: string,
    public status: string,
    public created_at: string,
    public lastmodified_at: string
  ) {
  }
}
