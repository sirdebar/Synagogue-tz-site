import Styles from './Header.module.css'

function Header() {
  return (
    <div className={Styles["header__wrapper"]}>
      <div className={Styles["header__logo"]}>
        <img src="../public/images/Logo.png" alt="" />
      </div>
      <div className={Styles["header__nav"]}>
        <a href="#"><h2>О нас</h2></a>
        <a href="#"><h2>Услуги</h2></a>
        <a href="#"><h2>Отзывы</h2></a>
      </div>
    </div>
  )
}

export default Header
