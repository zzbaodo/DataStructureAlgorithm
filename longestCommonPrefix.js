var longestCommonPrefix = function (strs) {
    if (strs.length === 0){
        return ''
    }
  let comparedWord = strs[0].split("")

  let common = []
  for (let i = 1; i < strs.length; i++) {
    const splitWord = strs[i].split("")
    for (let j = 0; j < comparedWord.length; j++) {
      if (comparedWord[j] === splitWord[j]) {
        common.push(comparedWord[j])
      } else if (comparedWord[0] !== splitWord[0]) {
        return ''
      } else {
        break
      }
    }
    comparedWord = [...common]
    common = []
    
  }
    return comparedWord.join('')
}
console.log(longestCommonPrefix(["flower","flow","flight"]))