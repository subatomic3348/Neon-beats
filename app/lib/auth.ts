
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { prismaClient } from "./db";

export const NEXT_AUTH_CONFIG = {
    providers: [
       
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
     
         
    ],
   
    secret: process.env.NEXTAUTH_SECRET || "null",
    callbacks:{
        async signIn(params:any){
            if(!params.user.email){
                return false
            }
            
            try{
                await prismaClient.user.create({
                data:{
                    email:params.user.email,
                    provider:"Google"
                    
                }
                    
                })

            }
            catch(e){

            }
            return true;
        }
        
    }
    
      
    }
   
  