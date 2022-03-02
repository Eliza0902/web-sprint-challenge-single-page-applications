import React from "react";
import { useHistory } from "react-router-dom";

export default function Home(){
    const history = useHistory();
    const routeToOrderPage = () => {
        history.push("/pizza");
    }
    return (
        <div className="home-pizza">
    
            <button
            onClick={routeToOrderPage}
            id = 'order-pizza'>
                Pizza?
            </button>
        </div>
    )
}