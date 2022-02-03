const IngredientsMenu = ({add, reset, isDisabled, cheeseLabel}) => {

    return (
        <div>
            <section className="ingredients-menu">
                <h2>Ingredients</h2>
                <button onClick={add('bun')}>Bun</button>
                <button onClick={add('lettuce')}>Lettuce</button>
                <button disabled={isDisabled} onClick={add('cheese')}>Cheese</button>
                <button onClick={add('tomato')}>Tomato</button>
                <button onClick={add('beef')}>Beef Patty</button>
                <button onClick={add('bacon')}>Bacon</button>
            </section>
            <button onClick={reset}>Reset</button>
            <h2>{cheeseLabel}</h2>
        </div>
    )
}

export default IngredientsMenu