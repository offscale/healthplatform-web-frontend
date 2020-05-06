// TODO: Figure out a generic way of check if strings are dates and converting for all attributes

interface I {
  createdAt: Date;
  updatedAt: Date;
}

export const parseDates = <T>(obj: T & I & {updatedAt: string, createdAt: string}): T & I => Object.assign(obj, {
  createdAt: new Date(obj.createdAt), updatedAt: new Date(obj.updatedAt)
});

export const parseCategoryEnum = (categoryEnum?: string): string => {
  categoryEnum = categoryEnum == null ? localStorage.getItem('defaultCategoryEnum') : categoryEnum;
  if (categoryEnum == null) return categoryEnum;
  return categoryEnum.slice(0, categoryEnum.indexOf('[')-1);
}
