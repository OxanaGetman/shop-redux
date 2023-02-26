import GoodsDisplay from "./GoodsDisplay";
import dataGoods from "../../data/dataGoods";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/goodsSlice";

const Goods = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(<div className="Goods">
        {dataGoods.filter(goods => { 
            if (selectedCategory === "ВСЕ ТОВАРЫ") return true;
        return selectedCategory === goods.typeGoods}).map((goods, id) => <GoodsDisplay key={id} goods={goods}/> )}
    </div>)
}

export default Goods;