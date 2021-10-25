let str = `    //벡틱 기호 안에 쓰면 띄어쓰기 가능
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog
 abbcccdddd
 d`  


//리터럴방식
console.log(
  str.match(/d$/gm) // 한줄에 끝부분 알파벳 d 
  )  


