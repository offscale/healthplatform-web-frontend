export interface ICategorise {
  id: number;

  artifact_location: string;
  category: string;
  username: string;

  createdAt?: Date;
  updatedAt?: Date;
}
