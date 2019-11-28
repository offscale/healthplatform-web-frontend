export interface ICategorise {
  id: number;

  artifact_id: string;
  category: string;
  username: string;

  createdAt?: Date;
  updatedAt?: Date;
}
