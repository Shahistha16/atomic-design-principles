const option: string[] = [
  'Featured',
  'Price: Low to High',
  'Price: High to Low',
  'Avg. Customer Review',
  'Publication date',
]

const kindleUnlimited: {
  name: string,
  value: string,
}[] = [{ name: 'Kindle Unlimited Eligible', value: 'Kindle Unlimited' }]
const primeReading: {
  name: string,
  value: string,
}[] = [{ name: 'Prime Reading Eligible', value: 'Prime Reading' }]
const wordWise: {
  name: string,
  value: string,
}[] = [{ name: 'Word Wise Enabled', value: 'Word Wise' }]
const Deals: {
  name: string,
  value: string,
}[] = [{ name: 'Today`s Deals', value: 'Deals' }]

export { option, kindleUnlimited, primeReading, wordWise, Deals }
