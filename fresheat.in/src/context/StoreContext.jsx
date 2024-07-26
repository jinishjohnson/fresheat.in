import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url ="http://localhost:4000"
    const [token, setToken] = useState("");

    const [foodList,setFoodList] =  useState([])

    const addToCart = (itemId) => {
        // Ensure itemId is a valid identifier, typically a string or number
        if (typeof itemId !== 'string' && typeof itemId !== 'number') {
            console.error('Invalid itemId:', itemId);
            return;
        }
    
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };
    

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };
    const getTotalCartAmount = () => {
        if (!foodList) {
            return 0; // Or handle the case where foodList is not available
        }
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = foodList.find((product) => product._id === item);
                if (itemInfo) { // Add this check
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    // Handle the case where itemInfo is not found
                    console.warn("Item not found in foodList:", item);
                }
            }
        }
        return totalAmount;
    };
    const fetchFoodList = async () => {
        try {
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
        }
        catch (error){
        console.error("error ",error);
        }

        }


    useEffect (()=>{
       
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        fetchFoodList,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
