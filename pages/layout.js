import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './layout.module.css'
import AsideLeftPage from '@/Components/AsideLeft'
import AsideRightPage from '@/Components/AsideRight'
import Menu from '@/Components/Menu'


const Layout = ({children}) => {
  return (
    <>
    <div className={styles.wrapper_container}>
      <Header/>
      <Menu/>
      <div className={styles.content_center}>
        <AsideLeftPage/>
        <div className={styles.content}>{children}</div>
        <AsideRightPage/>
      </div>
      
      <Footer/>
    </div>
    </>
    
  )
}

export default Layout