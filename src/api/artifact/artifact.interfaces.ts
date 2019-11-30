export interface IArtifact {
  location: string;
  mimeType: string;
  contentType: string;
  meta?: string;

  createdAt?: Date;
  updatedAt?: Date;

  // Internal—frontend only—properties
  _parsedLocation: boolean | undefined;
  _unparsedLocation: string | undefined;
  _content: string | any | undefined;
}
