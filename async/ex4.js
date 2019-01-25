let arr = [
    {
      id: 1,
      name: 'Dung',
      age: 20
    },
    {
      id: 2,
      name: 'Diu',
      age: 20
    },
    {
      id: 3,
      name: 'Ky',
      age: 20
    },
    {
      id: 1,
      name: 'Hai',
      age: 22
    }
  ]

let  setArr = new Set(arr);
console.log(setArr);
for(let people of setArr){
    for(let people2 of setArr){
      if(people.id === people2.id){
        setArr.delete(people2);
      }
    }
}

console.log(setArr);