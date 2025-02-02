
const HomeUrl=async()=>{
    const home_url= await fetch("http://localhost:3000/");
    const data =home_url.json()
    return data;
}

const test=HomeUrl();
console.log('test :>> ', test);