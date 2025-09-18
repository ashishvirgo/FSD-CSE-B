function register(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      console.log('register end')
      resolve();
    },4000)
    })
    
   
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      console.log('send Email end')
      resolve();
    },3000)
    })
   
    
}
function login(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      console.log('login  end')
      reject('login failed');
    },1000)
    })
    
}
function getData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      console.log('get data end')
      resolve();
    },6000)
    })
    
}
function displayData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      console.log('display data end')
      resolve();
    },3000)
    })
    
}

//callback Hell
// register(function (){
//             sendEmail( function (){
//                    login(function (){
//                             getData( function (){
//                                   displayData();
//                             });
//                    });
//             });
// });

// using promise

// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)
// .catch((err)=>{
//   console.log('Error:',err)
// })
async function f1(){
    try{
await register();
await sendEmail();
await login();
await getData();
await displayData();
    }
    catch(err){
      console.error('Error:',err)
    }
}
f1();
console.log('call other Application')