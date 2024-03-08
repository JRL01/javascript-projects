function evaluatePalindrome() {
    const str = document.getElementById('text-input').value;
    const output = document.getElementById('output');
    
    if (!str) {
        alert("Please input a value");
    } else {
        const strClean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      
        const strSplit = strClean.split('');
        const strFlipped = strSplit.reverse();
        const strReversed = strFlipped.join('');
  
        if (strClean === strReversed) {
            output.innerText = `${str} is a palindrome`;
        } else {
            output.innerText = `${str} is not a palindrome`;
        }
    }
}