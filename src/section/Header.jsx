




import style from './Header.module.css'
export default function Header(){
    return(
        <header>
            <div className={style.logo}>eCom App</div>
            <nav className={style.nav}>
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#aboutUs">About Us</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}