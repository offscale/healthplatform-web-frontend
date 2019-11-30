import { IArtifact } from '../../api/artifact/artifact.interfaces';

export const parseLocation = (artifact: IArtifact): IArtifact => {
  if (artifact._parsedLocation) return artifact;

  artifact._unparsedLocation = artifact.location;

  switch (artifact.mimeType) {
    case 'application/x-www-form-urlencoded':
      artifact.location = decodeURIComponent(artifact.location);
      break;
    default:
      throw TypeError(`Not implemented: ${artifact.mimeType}`);
  }

  artifact._parsedLocation = true;

  return artifact;
};

export const parseContent = (artifact: IArtifact): string | any => {
  artifact = parseLocation(artifact);

  switch (artifact.contentType) {
    case 'image/jpeg':
    case 'image/png':
    case 'image/bmp':
    case 'image/gif':
      artifact._content = 'img'; /* `<img src="${artifact.location}" alt="artifact image"
                                   style="width: 70%" />`;*/
      break;
    default:
      throw TypeError(`Not implemented: ${artifact.mimeType}`);
  }

  return artifact;
};
