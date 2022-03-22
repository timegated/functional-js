const arr = [[1, 2], [5, [3, 4], 6], 3, 4];

function chain(array) {
  const flatArray = [];
  array.map(num => {
    return Array.isArray(num) ? num.forEach(item => {
      if (Array.isArray(item)) return item.forEach(subItem => flatArray.push(subItem));
      return flatArray.push(item)
    }) : num;
  });
  return flatArray;
};


console.log(chain(arr));