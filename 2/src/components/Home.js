import Header from "./Header";
import FoodOption from "./FoodOption";
import Grosery from "./Grosery";
import DineOption from "./DineOption";

export default function Home(){
    return(
        <>
             {/* Header component: */}
            <Header></Header>
            <FoodOption></FoodOption>
            <Grosery></Grosery>
            <DineOption></DineOption>
        </>
    )
}