import jwt  from "jsonwebtoken"

export default function verifyToken(token:string){

    const isValid = jwt.verify(token,process.env.JWT_SECRET);
    if(!isValid) return {valid:false};

    return {valid:true,payload:isValid};

}