// function first(){
//     console.log(1)
// }
// function second(){
//     console.log(2)
// }
// first();
// second();

// function first(){
//     setInterval(function(second){
//         console.log(1)
//     },300)
// }
// function second(){
//     console.log(2)
// }
// first();
// second();

//event loop có chức năng đọc call stack và event queue, nếu thấy stack rỗng thì nó sẽ đẩy event đầu tiên lên stack 

// callback function là một hàm có thể được gọi bởi các hàm khác và nó sẽ được thực thi nếu function trước nó đã chạy xong 
// function first(onFinish) {
//     setTimeout(function () {
//         console.log(1);
//         onFinish();
//     }, 500);

// }
// function second() {
//     console.log(2);
// }
// first(second);

// function makingCoffee(onFinish){
//     console.log('Making makingCoffee...');
//     onFinish();
// }
// function beep(){
//     console.log('beep')
// }
// makingCoffee(beep)

// function first(){
//     setTimeout(function(){
//         console.log('1')
//     },0)
// }
// function second(){
//     console.log('2')
// }
// first();
// second()

//callback hell 
// fs.readdir(source, function (err, files) {
//     if (err) {
//       console.log('Error finding files: ' + err)
//     } else {
//       files.forEach(function (filename, fileIndex) {
//         console.log(filename)
//         gm(source + filename).size(function (err, values) {
//           if (err) {
//             console.log('Error identifying file size: ' + err)
//           } else {
//             console.log(filename + ' : ' + values)
//             aspect = (values.width / values.height)
//             widths.forEach(function (width, widthIndex) {
//               height = Math.round(width / aspect)
//               console.log('resizing ' + filename + 'to ' + height + 'x' + height)
//               this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
//                 if (err) console.log('Error writing file: ' + err)
//               })
//             }.bind(this))
//           }
//         })
//       })
//     }
//   })
// let newPromise = new Promise((resolve, reject)=>{
//     // console.log('hello');
//     // resolve('thanh cong');
//     setTimeout(()=>{resolve('thanh cong')},300)
// })
// newPromise.then((msg)=>console.log('thanh cong:'+msg),()=>console.log('that bai'))
// let aPromise = new Promise((resovle,reject) => {
//     // console.log('hello');
//     // resovle();
//     // resovle("Thanh cong");
//     setTimeout(()=>{reject(new Error('that bai'));},300)

// })
// aPromise.then((msg)=>console.log("da thuc thi: "+msg),
// (errMsg)=>console.log(errMsg+''))

// function ajax(url) {
// 	return new Promise( function pr(resolve,reject){
// 		// make request, eventually call
// 		// either `resolve(..)` or `reject(..)`
// 	} );
// }

// // ..

// ajax( "http://some.url.1" )
// .then(
// 	function fulfilled(contents){
// 		return contents.toUpperCase();
// 	},
// 	function rejected(reason){
// 		return "DEFAULT VALUE";
// 	}
// )
// .then( function fulfilled(data){
// 	// handle data from original promise's
// 	// handlers
// } );
// console.log('start downloading pokemon')
// const pokemonPromise = fetch("https://pokeapi.co/api/v2/evolution-chain/?limit=120&offset=200")
// console.log(typeof pokemonPromise)


// var getIphone = true;
// var willGetIphoneX = new Promise(
//     function (resolve, reject) {
//         if (getIphone) {
//             var phone = {
//                 brand: 'iPhone X',
//                 color: 'pink'
//             };
//             resolve(phone);
//         } else {
//             var reason = new Error('Chưa được Iphone');
//             reject(reason);
//         }
//     }
// );
// var askMeForIphoneX = function () {
//     willGetIphoneX
//         .then(function (fulfilled) {
//             console.log(fulfilled);
//         })
//         .catch(function (error) {
//             console.log(error.message);
//         });
// };

// askMeForIphoneX();

// var getIphone = true;
// var getIphoneX = new Promise((resolve, reject) => {
//     if (getIphone) {
//         var ihone = {
//             brand: 'iphoneX',
//             color: 'pink'
//         }
//         resolve(ihone)
//     } else {
//         reject((new Error('het tien')))
//     }
// })
// getIphoneX
//     .then(function (iphone) {
//         console.log(iphone);
//     })
//     .catch((err)=> console.log(err.message))

// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000);

//   }).then(function(result) {

//     console.log(result); // 1

//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });

//   }).then(function(result) {

//     console.log(result); // 2

//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });

//   }).then(function(result) {

//     console.log(result); // 4

//   });

// let pokemonPromise = fetch('https://pokeapi.co/api/v2/evolution-chain/?limit=120&offset=200')
// pokemonPromise.then(rs => {
//     return rs.json()
// }).then(data => console.log(data))
//     .catch(err => console.log(err))


//promise.all
//   var names = ["John", "Peter", "Michael"];
   
//   var names_mapped = names.map(function(name) {
//       return testPromiseNomal(name);
//   });
   
//   Promise.all(names_mapped).then(function(response) {
//       console.log(response);
//   });

//Promise.race
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, 'one');
// });

// var promise2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then(function(value) {
//   console.log(value);
// });


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
  }
  
  asyncCall();
  