import { useDispatch, useSelector } from "react-redux";
import { filterType, getSelectedCategory } from "../../redux/goodsSlice";

const Filter = ({typeGoods}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return(<div>
        <p onClick={() => {dispatch(filterType(typeGoods))}} className={selectedCategory === typeGoods? "typeButtonSelected typeButton" : "typeButton"}>{typeGoods}</p>
    </div>)
}

export default Filter;