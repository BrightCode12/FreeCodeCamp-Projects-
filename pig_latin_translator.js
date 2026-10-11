function translatePigLatin(str) {
    const vowelRegex = /[aeiou]/i;
    const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
   let result = "";
    if(vowelRegex.test(str)){
      return result = str.replace(/^(.)(.*)$/, '$2$1way');
    } 
    if(consonantRegex.test(str)){
        return result = str.replace(/^(.)(.*)$/, '$2$1ay')
    }
}

console.log(translatePigLatin("Gold"));