const WordDictionary = function () {
  this.wordsTree = {};
};

WordDictionary.prototype.addWord = function (word) {
  const lenWord = word.length;
  let pointer = this.wordsTree;
  for (let i = 0; i < lenWord; i += 1) {
    const letter = word[i];
    if (!pointer[letter]) {
      pointer[letter] = {};
    }
    pointer = pointer[letter];
  }
  pointer["##"] = true;
};

WordDictionary.prototype.search = function (word) {
  function dfs(index, pointer) {
    if (index === word.length) {
      return pointer["##"] === true;
    }

    const letter = word[index];

    if (letter === ".") {
      for (let key in pointer) {
        if (key !== "##" && dfs(index + 1, pointer[key])) {
          return true;
        }
      }
      return false;
    } else {
      if (!(letter in pointer)) {
        return false;
      }
      return dfs(index + 1, pointer[letter]);
    }
  }

  return dfs(0, this.wordsTree);
};
