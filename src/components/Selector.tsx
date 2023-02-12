import styles from './Selector.module.css'

type Props = {
  activeSelector: string
  setActiveSelector: (selector: string) => void
}

function Selector({ activeSelector, setActiveSelector }: Props) {
  return (
    <ul className={styles.selector}>
      <li
        className={activeSelector === 'pomodoro' ? styles.isActive : ''}
        onClick={() => setActiveSelector('pomodoro')}
      >
        pomodoro
      </li>
      <li
        className={activeSelector === 'shortBreak' ? styles.isActive : ''}
        onClick={() => setActiveSelector('shortBreak')}
      >
        short break
      </li>
      <li
        className={activeSelector === 'longBreak' ? styles.isActive : ''}
        onClick={() => setActiveSelector('longBreak')}
      >
        long break
      </li>
    </ul>
  )
}

export default Selector
