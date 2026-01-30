
type Mods = Record<string, boolean>

function classNames(mainCls: string, additional: string[] = [], modificationsObject: Mods = {}) {
  return [
    mainCls,
    ...additional.filter(Boolean),
    ...Object.entries(modificationsObject)
      .filter(([_, value]) => Boolean(value))
      .map(([cls, _]) => cls)
  ].join(' ');
}

export default classNames;