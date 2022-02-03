import './App.css';
import { useState } from 'react'
import TopNav from './TopNav'
import Burger from './Burger'
import IngredientsMenu from './IngredientsMenu'
import BurgerPresets from './BurgerPresets'

function App() {
  
  let [menuState, setMenuState] = useState(true);
  let [ingredients, setIngredients] = useState([])
  let [cheeseLabel, setCheeseLabel] = useState("")

  const add = (ingredientName) => {
    let newIngredients = [ingredientName, ...ingredients];
    handleCheese();
    return () => setIngredients(newIngredients);
  }

  const remove = targetIndex => {
    const newIngredients = [...ingredients];
    setIngredients(newIngredients.filter((ing, idx) => idx !== targetIndex));
  }

  const handleMenu = () => {
    setMenuState(!menuState);
  }

  const handleBuntiful = () => {
    const newIngredients = ['bun', 'bun', 'bun', 'bun', 'bun']
    setIngredients(newIngredients);
  }

  const reset = () => {
    const newIngredients = [];
    setIngredients(newIngredients);
  }

  const cheeseCount = () => {
    const newIngredients = [...ingredients];
    const cheeseCount = newIngredients.filter((ing) => ing === 'cheese').length
    return cheeseCount
  }

  const handleCheese = () => {
    const newIngredients = [...ingredients];
    const cheeseCount = newIngredients.filter((ing) => ing === 'cheese').length
    if (cheeseCount === 2) {
      setCheeseLabel("Double Cheese")
    } else if (cheeseCount === 3) {
      setCheeseLabel("Triple Cheese")
    } else if (cheeseCount === 4) {
      setCheeseLabel("Quadruple Cheese")
    } else if (cheeseCount === 5) {
      setCheeseLabel("Quintuple Cheese")
    } else if (cheeseCount === 6) {
      setCheeseLabel("Maximum Cheese!!")
    } 
  }

  const isDisabled = cheeseCount() >= 6

  return (
    <div className="App">
      < TopNav 
      handleMenu={handleMenu}/>
      {(menuState) 
      ? <div> 
          < BurgerPresets 
          handleBuntiful={handleBuntiful}/>
          < IngredientsMenu 
          add={add}
          reset={reset}
          cheeseLabel={cheeseLabel}
          isDisabled={isDisabled}
          />
      </div>
      : null }
      <section className="burger-wrapper">
        <h2>Your Creation</h2>
        < Burger 
        ingredients={ingredients} 
        onRemove={remove}/>
      </section>
    </div>
  );
}

export default App;