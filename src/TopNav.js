const TopNav = ({handleMenu}) =>{
    return (
        <div>
            <header>
                <h1>Burgulator</h1>
                <button onClick={handleMenu}>Show / Hide Menu</button>
            </header>
        </div>
    )
}

export default TopNav