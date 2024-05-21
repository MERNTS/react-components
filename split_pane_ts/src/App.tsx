import { FC, useState } from 'react'
import styles from "./index.module.scss";
import cn from 'classnames'

const App: FC = () => {
  const [width] = useState(280)

  return (
      <div className={styles.container}>
          <div className={cn(styles.leftside, styles.block)} style={{width: `${width}px`}}></div>
          //left
          <p>asdfsdsdf</p><p>asdfsdsdf</p><p>asdfsdsdf</p>
          <div className={cn(styles.rightside, styles.block)} style={{left: `${width}px`}}></div>
          //right
          <div className={styles.divider} style={{left: `${width}px`}}/>
      </div>
  )
}

export default App
