import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3 className='navTitle'>STORE</h3>
            <div >
                <button>Perro</button>
                <button>Gato</button>
                <button>Caballo</button>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar