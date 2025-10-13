const url="https://api.github.com/users/ashishvirgo";
const res=fetch(url);
  res.then((resp)=>{
         return resp.json();
  })
  .then((data)=>{
    console.log("Data:",data);
  })
  .catch((err)=>{
    console.log("Error:",err);
  })
  .finally(()=>{
    console.log('fetch done successfully in finally')
  })