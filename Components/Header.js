import React, {useContext} from 'react'
import AppContext from '@/Context/AppContext';
import styles from './Header.module.scss'
import Image from 'next/image'



const Header = () => {
  const context =   useContext(AppContext)
  function changeRu(){
    context.setLang('ru')
  }
  function changeEng(){
    context.setLang('en')
  }

  // console.log(context.lang);
  return (
  <div className={styles.header}>
    <div className={styles.container_header}>
        <div className={styles.contailer_sides}>
            <div className={styles.left_side}>
            <Image
                priority
                src="/icons/logoru.svg"
                width={235}
                height={155}
                alt="Логотип"  
                />
            </div>
            <div className={styles.centre_side}>Федеральное государственное бюджетное учреждение культуры<br/>
                <span className={styles.text_upper}>РОССИЙСКАЯ ГОСУДАРСТВЕННАЯ<br/>
                БИБЛИОТЕКА ИСКУССТВ<br/></span>
                "Искусство помогать искусству"</div>
            <div className={styles.right_side}>
              <div className={styles.speciales}>
                  <Image 
                  priority
                  src='/icons/eye.svg' 
                  width={80}
                  height={45}
                  alt="Глаз" 
                  />
                  <div className={styles.lang} onClick={changeRu}>Рус</div>
                  <div className={styles.lang} onClick={changeEng}>Eng</div>
              </div>
              <div className={styles.socials}>

              </div>
              <div className={styles.possibilities}>

              </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Header