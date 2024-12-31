function List(){
    return(
        <ol>
            <li>Fruits</li>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Mango</li>
            </ul>
            <li>Vegetables</li>
            <ol className="roman">
                <li>Carrot</li>
                <li>Tomato</li>
                <li>Onion</li>
            </ol>
            <li>Birds</li>
            <ul className="symbols">
                <li>Sparrow</li>
                <li>Crow</li>
                <li>Peacock</li>
            </ul>
        </ol>
    )
}

export default List;