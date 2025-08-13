



// Middleware to check userID and hassPremiumPlan

import { clerkClient } from "@clerk/express";

export const auth =async (req ,res ,next) =>{
    try {
        const {userID ,has} = await req.auth();
        const hasPremiumPlan = await has({plan:'premium'});
        const user = await clerkClient.users.getUser(userID);
        if(!hasPremiumPlan && user.privateMetadata.free_usage){
            res.free_usage = user.privateMetadata.free_usage
        }
        else{
            await clerkClient.users.updateUserMetadata(userID,{
                privateMetadata:{
                    free_usage:0
                }
            })
            req.free_usage =0;
        }
        req.plan = hasPremiumPlan ?'premium':'free';
        next()
    } catch (error) {
        res.json({success:false ,message:error.message})
        
    }

}