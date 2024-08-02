import foodModel from "../models/FoodModel.js";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from 'uuid';

// Add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding food item" });
  }
};

// All food list
const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching food list" });
  }
};

// Remove food item
const removeFood =async(req,res) =>{
  try{
    const food =await foodModel.findById(req.body._id);
    fs.unlink(`uploads/${food.image}`,()=>{ })

    await foodModel.findByIdAndDelete(req.body._id)
    res.json({success:true,message:"Food removed"})

  }catch(error){
      console.log(error);
      res.json({success:false,message:"Error removing food item"})

  }
}

export { addFood, listFood, removeFood };
