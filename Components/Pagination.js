import styles from './Pagination.module.scss'
import { useContext, useState} from 'react'
import AppContext from '@/Context/AppContext'


export default function Pagination({num}) {
    const context = useContext(AppContext)
    const [color, setColor] = useState('box_num')

    function getPage(){
        context.setNumberPage(num)
        if(num === context.numberPage){
            setColor('box_num .change')
        }
    }
    return(
        <div className={num === context.numberPage ? styles.change : styles.box_num} onClick = {getPage} >{num}</div> 
    )
}