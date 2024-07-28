import styles from './Features.module.css';

const Features = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Ознакомьтесь с нашими ключевыми особенностями и преимуществами</h2>
            <div className={styles.features}>
                <div className={styles.featureItem}>
                    <img src="../public/images/community-events.png" alt="Community Events Hub" className={styles.image}/>
                    <h3 className={styles.title}>Центр общественных мероприятий</h3>
                    <p className={styles.description}>Участвуйте в обогащающей общественной деятельности.</p>
                </div>
                <div className={styles.featureItem}>
                    <img src="../public/images/prayer-services.png" alt="Prayer Services" className={styles.image}/>
                    <h3 className={styles.title}>Молитвенные службы</h3>
                    <p className={styles.description}>Участвуйте в возвышающих молитвах и ритуалах.</p>
                </div>
                <div className={styles.featureItem}>
                    <img src="../public/images/volunteer-opportunities.png" alt="Volunteer Opportunities" className={styles.image}/>
                    <h3 className={styles.title}>Волонтерские возможности</h3>
                    <p className={styles.description}>Измените ситуацию вместе с нами.</p>
                </div>
            </div>
            <div className={styles.banner}>
                <img src="../public/images/ban.png" alt="Inclusive Activities" className={styles.bannerImage}/>
                <div className={styles.bannerContent}>
                    <h2>Инклюзивная духовная и общественная деятельность</h2>
                    <p>Присоединяйтесь к нашей инклюзивной духовной и общественной деятельности.</p>
                    <p>Откройте для себя гостеприимное пространство для духовного роста и объединения общества.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
