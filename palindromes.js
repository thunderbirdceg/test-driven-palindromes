const prepareStr = str => str.toLowerCase().replace(/[^a-z]/g, '');
 	
 	const isPalindrome = str => {
 	  const endIndex = str.length - 1;
 	  for (let i = 0; i < str.length / 2; i++) {
 	    if (str[i] !== str[endIndex - i]) return false;
 	  }
 	  return true;
 	};

const palindromes = str =>{
    str = prepareStr(str);
    const palindromes = isPalindrome(str)
    if (palindromes)
    return [str]
    else  return []
}

palindromes.prepareStr = prepareStr;
palindromes.isPalindrome = isPalindrome;
module.exports = palindromes;
