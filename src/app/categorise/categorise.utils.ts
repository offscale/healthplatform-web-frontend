export const parseBeforeJsonArray = <T extends {value: string}>(selection: T): T['value'] | undefined =>
  selection == null || !selection.value ? null : selection.value.slice(0, selection.value.indexOf('['));

export const parseOutJsonArray = (value?: string): string[] =>
  value == null || !value.length ? []
    : JSON.parse(value.substr(value.indexOf('['), value.lastIndexOf(']')));
