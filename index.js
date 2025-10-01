class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, '');
  }

  static titleize(sentence) {
    const exceptions = [
      "the", "a", "an", "but", "of", "and", 
      "for", "at", "by", "from"
    ];

    return sentence
      .toLowerCase()
      .split(" ")
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word)) {
          return this.capitalize(word);
        } else {
          return word;
        }
      })
      .join(" ");
  }
}
