import db from "~/server/db";
import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'
import { serialize } from "cookie";
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
            
            if(!userExist) res.status(400).json({message:'message User does not exist'});

            if(bcrypt.compareSync(pass,userExist?.password)){
                const userPayload = {
                    email:userExist.email,
                    name:userExist.name
                }

                let secret  = process.env.JWT_SECRET;

                const jwtToken = jwt.sign(userPayload,secret,{expiresIn:"2h"});


                const serializeToken = serialize(
                    'authToken',jwtToken,{
                        httpOnly:true,
                        maxAge:3600,
                        path:'/'
                    }
                )

                res.setHeader('Set-Cookie',serializeToken);
                res.status(200).json({message:"user Logged in successfully",token:jwtToken});
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