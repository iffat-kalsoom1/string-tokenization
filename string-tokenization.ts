/**
Tokenize a given string.
@param {string} string - The string to be tokenized.
@param {boolean} shouldTokenizeWords - Indicates whether to tokenize individual words or not.
@returns {string[]} - An array of tokens.
@example
// Tokenize a string
tokenize('Hello world! This is an example.', false);
// Output: ["hello", "world!", "this", "is", "an", "example."]

// Also tokenize individual words in a string
tokenize('Hello world! This is an example.', true);
/* Output: [
    "h", "he", "o", "hel", "lo", "hell", "llo", "hello",
    "ello", "", "w", "wo","!", "wor", "d!", "worl",
    "ld!", "world", "rld!", "world!","orld!", "t", "th",
    "s","thi", "is", "this", "his","i", "a", "an", "n",
    "e", "ex", ".", "exa","e.",  "exam", "le.", "examp",
    "ple.", "exampl", "mple.", "example","ample.", "example.", "xample.",
    "hello ", "hello w", "hello wor" ...
    ]
*/
export function tokenize(string: string, shouldTokenizeWords: boolean): string[] {
  const tokensArray = Array.from(new Set(string.toLowerCase().split(' ')))

  if (!shouldTokenizeWords) return tokensArray

  if (shouldTokenizeWords) {
    let resultTokens = []

    const stringLength = string.length;
    for (let i = 0; i < stringLength; i++) {
      const element = string[i];
      let wordTokens = ''
      let reverseWordToken = ''
      for (let i = 0; i < stringLength; i++) {
        wordTokens += string[i]
        resultTokens.push(wordTokens.toLowerCase())

        if (string[stringLength - i]) {
          reverseWordToken += string[stringLength - i]
          let revToken = ''
          for (let i = reverseWordToken.length - 1; i >= 0; i--) {
            revToken += reverseWordToken[i]
          }
          resultTokens.push(revToken.toLowerCase())
        }
      }
      resultTokens.push(wordTokens.toLowerCase())
    }

    tokensArray.forEach(token => {
      let wordTokens = ''
      let reverseWordToken = ''

      const tokenLength = token.length

      for (let i = 0; i < tokenLength; i++) {
        wordTokens += token[i]
        resultTokens.push(wordTokens.toLowerCase())

        if (token[tokenLength - i]) {
          reverseWordToken += token[tokenLength - i]
          let revToken = ''
          for (let i = reverseWordToken.length - 1; i >= 0; i--) {
            revToken += reverseWordToken[i]
          }
          resultTokens.push(revToken.toLowerCase())
        }
      }
      resultTokens.push(wordTokens.toLowerCase())
    })
    return Array.from(new Set(resultTokens))
  }
}