import Styles from './Banner.module.css'

function Banner() {
  return (
    <div className={Styles['banner__container']}>
      <div className={Styles['banner__component']}>
        <h1>100+</h1>
        <p>Ознакомьтесь с нашими значимыми общественными <br /> мероприятиями.</p>
      </div>
      <div className={Styles['banner__component']}>
        <h1>200+</h1>
        <p>Узнайте о наших возвышающих молебнах.</p>
      </div>
      <div className={Styles['banner__component']}>
        <h1>100%</h1>
        <p>Откройте для себя наши эффективные возможности <br /> для волонтеров.</p>
      </div>
    </div>
  )
}

export default Banner
