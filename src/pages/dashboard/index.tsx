import { GetServerSidePropsContext } from "next";
import { redirect } from "next/navigation";
import verifyToken from "~/auth/verifyToken";


export const Dashboard = ()=>{
    return(
        <div> Hello </div>
    )
}

export async function getServerSideProps(context:GetServerSidePropsContext){
    const {req} = context;
    const {authToken} = req.cookies;
    if(!authToken){
        return{
            redirect:{
                destination:'/login',
                permanent:true
            }
        }
    }

    const isValid = verifyToken(authToken);

    if(!isValid){
        return{
            redirect:{
                destination:'/login',
                permanent:true
            }
        }
    }

    return {props:{}}
}