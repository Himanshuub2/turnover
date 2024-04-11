import db from "~/server/db";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { NextApiRequest,NextApiResponse } from "next";



interface UserInfo extends NextApiRequest{
    name:string;
    email:string;
    pass:string;
}
export default async function handler (req:UserInfo,res:NextApiResponse){
    if(req.method==='POST'){

        const {name,email,pass} = req.body as UserInfo;

        const hashedPass:string = (await bcrypt.hash(pass,10)) as string ;

        try{
            const user = await db.users.create({
                data:{
                    name,
                    email,
                    password:hashedPass
                }
            })
            console.log(user);
            const jwtToken = jwt.sign({name:name,email:email},'Himanshu',{algorithm:'RS256',expiresIn:'2h'})
            return res.status(201).json({message:'user created Successfully',token:jwtToken})
        }
        catch(err){
            return res.status(400).json({message:'Error occured while creating user','Error':err})
        }
      
    }
    else{
        res.status(405).end('Method Not allowed')
    }

}