const wordTokenization = (str: string) => {
  let word = '';
  let wordTokenizationResults = '';
  let i : number
  for (i = 0; i < str.length; i++) {
    word = word + str[i];
    wordTokenizationResults = wordTokenizationResults + ' ' + word;
  }
  return wordTokenizationResults;
};
const removeRepetitions = (str: string) => {
  const spaceSeparatedWords = str.split(' ');
  spaceSeparatedWords.forEach((word, index) => {
    let i : number;
    for (i = index + 1; i < spaceSeparatedWords.length; i++) {
      if (spaceSeparatedWords[i] == word) spaceSeparatedWords[i] = '';
    }
  });
  const noEmptyStrings = spaceSeparatedWords.filter((str) => str !== '');
  return noEmptyStrings.join(' ');
};
export function stringTokenization(str: string) : string {
  const spaceSeparatedWords = str.split(' ');
  let stringTokenizationResults = '';
  spaceSeparatedWords.forEach((word) => {
    const tokenizedWordString = wordTokenization(word);
    stringTokenizationResults = stringTokenizationResults + '' + tokenizedWordString;
  });
  return removeRepetitions(stringTokenizationResults.toLowerCase());
};