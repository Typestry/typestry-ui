export const SectionQueryKeys = {
  sections: ["sections"],
  section: (id: string) => [...SectionQueryKeys.sections, id],
} as const

export const ConfigQueryKeys = {
  configs: ["configs"],
  config: (id: string) => [...ConfigQueryKeys.configs, id],
} as const
