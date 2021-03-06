class Formatter {
  //add static methods here

//   Write a method static capitalize that takes in a string and capitalizes the first letter.

  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
    
  }
// Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
// Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  static titleize(string){
    let skips = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    let stringArray = string.split(" ")
    let newSentence = []
    newSentence.push(this.capitalize(stringArray[0]))
    for(let i = 1; i < stringArray.length; i++){
      if(!skips.includes(stringArray[i])){
        newSentence.push(this.capitalize(stringArray[i]))
      } else {
        newSentence.push(stringArray[i])
      }
    }
    
    return newSentence.join(" ")
  }
}