import Filter from "./Filter";

const AllCategories = () => {
    return(<div className="AllCategories">
        <h1 className="header">СОБЕРИ СВОЙ ОБРАЗ!</h1>
        <p className="items">{['ПЛАТЬЯ', 'ВЕРХНЯЯ ОДЕЖДА', 'ОБУВЬ', 'АКСЕССУАРЫ', 'ВСЕ ТОВАРЫ'].map((typeGoods, id) => <Filter key={id} typeGoods={typeGoods}/>)}</p>
    </div>)
}

export default AllCategories;