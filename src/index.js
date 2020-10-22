
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (Array.isArray(matrix) && [].concat(...matrix).length !== null)  {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i === 0 || i % 2 == 0){ 
         result = result.concat(matrix[i]);
        } else result = result.concat(matrix[i].reverse());
     
      } return result = [].concat(...result);
     
  } else return result = [];
  
}
