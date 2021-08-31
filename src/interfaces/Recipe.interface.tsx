export interface Recipe {
  readonly _id?: string;
  readonly name: string;
  readonly types: Array<string>;
  readonly image?: string;
  readonly punctuation?: number;
}
