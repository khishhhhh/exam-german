export default class Search {
  constructor(section, level, teil) {
    this.section = section;
    this.level = level;
    this.teil = teil;
  }
  doSearch(arr) {
    var result = [];
    try {
      for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (
          (arr[i].level === this.level) &
          (arr[i].section === this.section) &
          (arr[i].teil == this.teil)
        ) {
          result.push(arr[i]);
        }
      }
    } catch (error) {
      console.log("there is a error" + error);
    }
    console.log(result);

    return result;
  }
}
