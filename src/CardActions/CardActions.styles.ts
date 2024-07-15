import { TypestryComponents } from "@/theme/types"

export const TuiCardActionArea: TypestryComponents["TuiCardActionArea"] = (
  theme,
) => ({
  gap: theme("spacing.4"),
  display: "grid",
  alignItems: "center",
  "@media (min-width: 768px)": {
    display: "flex",
  },
})
