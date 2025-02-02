export const BodyFunction=(req,res,next)=>{
const body = true;
if(body){
    console.log('body is true. :>> ');
     req.result ="test 1";
    next();
    // return result;
}
}
