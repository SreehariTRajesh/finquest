import { useState } from 'react'
import styles from './snackbar.module.css'

export default function Snackbar(props) {
    const [hidden,setHidden] = useState(false);
	return (
		<div className={styles['main']} style={{"display":hidden?"none":"block"}}>
          
				<p className={styles["snack-text"]}>{props.message} </p>
                <button className={styles["snack-close"]} onClick={(e)=>{
                    setHidden(!hidden);
                }}>x</button>
           
		</div>
	)
}
