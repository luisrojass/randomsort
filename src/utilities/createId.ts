export function createId (): string {
  return ([1e7].toString() + (-1e3).toString() + (-4e3).toString() + (-8e3).toString() + (-1e11).toString()).replace(/[018]/g, c =>
    (parseInt(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(c) / 4).toString(16)
  )
}
