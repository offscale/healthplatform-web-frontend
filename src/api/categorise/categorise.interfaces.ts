import { ICategoryEnum } from '../category-enum/category-enum.interfaces';
import { IArtifact } from '../artifact/artifact.interfaces';


export interface ICategorise {
  id?: number;

  artifactLocation: string;
  categoryEnumName: string;

  category: string;
  username: string;

  categoryEnum?: ICategoryEnum;

  artifact?: IArtifact;

  createdAt?: Date;
  updatedAt?: Date;
}
