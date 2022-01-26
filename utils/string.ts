export const strCaseUper = (strList: string[]) => {
  return strList
    .map((item: string) => {
      return item.slice(0, 1).toUpperCase() + item.slice(1)
    })
    .join('')
}
