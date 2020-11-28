class Formatter {
  //add static methods here
  
  static capitalize(string) {
    return string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }

  static sanitize(string) {
    return string.split(" ").map(word => word.replace(/[^A-Za-z0-9-']+/g, '')).join(" ")
  }

  static titleize(string) {
    let avoidable = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let arrayOfString = string.split(" ")
    for (let i=0; i<arrayOfString.length; i++){
      let currentEl = arrayOfString[i]
      if (i===0) result.push(this.capitalize(currentEl))
      else if (avoidable.includes(currentEl)) result.push(currentEl)
      else result.push(this.capitalize(currentEl))
    }
    return result.join(" ")
  }

}
