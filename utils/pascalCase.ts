export const pascalCase = (str: string) => {
  return str.split('-')
    .map((item: string) => item.slice(0, 1).toUpperCase() + item.slice(1))
    .join('')
}
