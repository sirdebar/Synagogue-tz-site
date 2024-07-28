import Styles from './Main.module.css';

function Main() {
    return (
        <main className={Styles["main"]}>
            <section className={Styles['hero__container']}>
                <div className={Styles['hero__text']}>
                    <div className={Styles['big__title']}>
                    <h1 className={Styles['hero__title']}>Питербуржская синагога</h1> 
                    <img src="../public/images/flag.png" alt="" />
                    </div>
                    <p className={Styles['hero__subtitle']}>Шабат шалом! <br />
                     Первая в Санкт-Питербурге синагога <br />
                    Приветствует своих будующих прихожан!</p>
                </div>
            </section>
        </main>
    );
}

export default Main;
