// powerbi-visuals-api only ships ambient `const enum` declarations, so the members have no
// runtime representation once the sources are transpiled by esbuild. This module provides the
// missing runtime values and is aliased in place of `powerbi-visuals-api` while testing.

export const SubSelectionOutlineRestrictionType = {
    Clamp: 0,
    Clip: 1,
} as const;

export const SubSelectionStylesType = {
    None: 0,
    Text: 1,
    NumericText: 2,
    Shape: 3,
} as const;

export const SubSelectionOutlineType = {
    Group: 0,
    Rectangle: 1,
    Line: 2,
    Polygon: 3,
    Arc: 4,
} as const;

export const SubSelectionOutlineVisibility = {
    None: 0,
    Hover: 1,
    Active: 2,
} as const;

const powerbi = {
    visuals: {
        SubSelectionOutlineRestrictionType,
        SubSelectionOutlineType,
        SubSelectionOutlineVisibility,
        SubSelectionStylesType,
    },
    extensibility: {},
};

export default powerbi;
