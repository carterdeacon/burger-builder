// This is a stateless component. It uses props to get the state data from app.js but doesn't handle state at all

const Burger = ({ingredients, remove}) => {
    return (
        <>
            <div className="top-bun"></div>
            {ingredients.map((ing, index) => 
            <div key={index} onClick={() => remove(index)} className={`ingredients ${ing}`}>
            </div>
            )}
            <div className="bottom-bun"></div>
        </>
    )
}

export default Burger