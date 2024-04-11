import db from "~/server/db";
import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from "next";

interface IUser{
    email:string;
    pass:string
}
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method==='POST'){

        const {email,pass}  = req.body as IUser;

        try{
            const userExist:any =await db.users.findFirst({
                where:{
                    email,
                },
            })
            console.log(userExist);
            
            if(!userExist) res.status(400).json({message:'message User does not exist'});

            if(bcrypt.compareSync(pass,userExist?.password)){
                const userPayload = {
                    email:userExist.email,
                    name:userExist.name
                }

                res.status(200).json({message:"user Logged in successfully"});
            }
            
            res.status(400).json({message:"Invalid Password"})

            
        }
        catch(err){
            res.status(400).json({message:'Unable to Login, Please try again',er:err})
        }
       
    }
    else{
        res.status(405).json({message:"Method Not allowed"})
    }


}