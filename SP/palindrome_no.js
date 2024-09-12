function is_palindrome(n){
    return n == n.toString().split("").reverse().join("") ? "Yes" : "No";
  }