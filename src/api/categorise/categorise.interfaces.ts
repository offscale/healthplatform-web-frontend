import { ICategoryEnum } from '../category-enum/category-enum.interfaces';
import { IArtifact } from '../artifact/artifact.interfaces';


export interface ICategorise {
  id: number;

  artifact_location: string;
  category_enum_name: string;

  category: string;
  username: string;

  categoryEnum?: ICategoryEnum;

  artifact?: IArtifact;

  createdAt?: Date;
  updatedAt?: Date;
}
