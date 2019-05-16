export function makeAlphabeticSorter(sortBy = 'name') {
  return (a, b) => a[sortBy] > b[sortBy] ? 1 : (a[sortBy] < b[sortBy] ? -1 : 0);
}
