import userModel from "../models/userModel.js"




// add items to user cart
const addToCart = async (req,res)=>{
   try{
       const newLocal = await userModel.findById({ _id:req.body.userId });
        let userData = newLocal;
        let cartData = await userData.cartData;
        
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true ,message:"Added to cart"});
   }catch(error){
    console.log(error);
    res.json({success:false ,message : "Error in adding to cart"});

   }
}


//remove items form user cart
const removeFromCart= async (req,res) =>{
try {
    const newLocal = await userModel.findById({ _id:req.body.userId });
    let userData = newLocal;
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true ,message:"Remove from Cart"})
        } catch (error) {
            console.log(error);
            res.json({success:false , message:"Error"})
    
}
}

//fetch user cart data

const getCart =async (req,res) =>{
    try {
        const newLocal = await userModel.findById({ _id:req.body.userId });
        let userData = newLocal;
        let cartData = await userData.cartData;
        res.json({success:true ,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"Error"})
        
    }

}


export {addToCart,removeFromCart,getCart}