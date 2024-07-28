import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoSection}>
                <h2>Свяжитесь с нами</h2>
                <p>Свяжитесь с нами для сотрудничества или вопросов.</p>
                <div className={styles.location}>
                    <h3>Санкт-Питербург</h3>
                    <p>Понедельник - Пятница</p>
                    <p>9 утра - 5 вечера</p>
                    <div>
                        <h3>Наш адрес</h3>
                        <p>Санкт-Питербург, Малая Морская улица, 4</p>
                    </div>
                </div>
            </div>
            <div className={styles.formSection}>
                <form>
                    <label>
                        Введите имя
                        <input type="text" name="name" placeholder="Иван Иванов" />
                    </label>
                    <label>
                        Введите ваш емейл
                        <input type="email" name="email" placeholder="пример@мейл.ру" />
                    </label>
                    <label>
                        Введите ваше сообщение
                        <textarea name="message" placeholder="Ваши вопросы можете описать тут"></textarea>
                    </label>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
