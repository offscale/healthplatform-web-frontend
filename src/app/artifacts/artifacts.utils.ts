import { IArtifact } from '../../api/artifact/artifact.interfaces';

export interface ILocation {
  location: string;

  _unparsedLocation?: string;
  _parsedLocation?: boolean;
  mimeType?: string;
}

export const parseLocation = <T extends ILocation>(locationObj: T): typeof locationObj => {
  if (locationObj._parsedLocation) return locationObj;

  locationObj._unparsedLocation = locationObj.location;

  if (locationObj.hasOwnProperty('mimeType'))
    switch (locationObj.mimeType) {
      case 'application/x-www-form-urlencoded':
        locationObj.location = decodeURIComponent(locationObj.location);
        break;
      default:
        throw TypeError(`Not implemented: ${locationObj.mimeType}`);
    }
  else locationObj.location = decodeURIComponent(locationObj.location);

  locationObj._parsedLocation = true;

  return locationObj;
};

export const parseContent = (artifact: IArtifact): string | any => {
  artifact = parseLocation<IArtifact>(artifact);

  switch (artifact.contentType) {
    case 'image/jpeg':
    case 'image/png':
    case 'image/bmp':
    case 'image/gif':
      artifact._content = `<img src="${artifact.location}" alt="artifact image"
                                style="width: 70%" id="artifact" />`;
      break;
    default:
      throw TypeError(`Not implemented: '${artifact.contentType}'`);
  }

  return artifact;
};
