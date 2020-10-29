export const isDefined = <T>(val: T | undefined | null): val is T => val !== undefined && val !== null

export const toPrimaryKey = (name: string) => name.toLocaleLowerCase().replace(/[^a-z]/g, '')
