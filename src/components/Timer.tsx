import TimeRemaining from './svg/TimeRemaining'
import styles from './Timer.module.css'

type Props = {
  timeLeft: number
  timeLimit: number
  handleClick: () => void
  isRunning: boolean
}

function Timer({ timeLeft, timeLimit, handleClick, isRunning }: Props) {
  const FULL_DASH_ARRAY = 283

  const calculateFraction = () => {
    const rawFraction = timeLeft / timeLimit
    // the above value leaves a little extra at the end of the countdown
    // this return value gradually reduces the leftover second to nothing
    return rawFraction - (1 / timeLimit) * (1 - rawFraction)
  }

  // Update the dasharray value as time passes, starting with 283
  const setDasharray = () => {
    if (timeLeft === 0) {
      return '283 283'
    }
    return `${(calculateFraction() * FULL_DASH_ARRAY).toFixed(1)} 283`
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className={styles.timerWrapper}>
      <div onClick={handleClick} className={styles.timer}>
        <TimeRemaining getDasharray={setDasharray} />{' '}
        <div className={styles.label}>
          <h1>
            {minutes === 0 ? '00' : minutes}:
            {seconds.toString().padStart(2, '0')}
          </h1>
          {seconds + minutes > 0 ? (
            <h3>{isRunning ? 'Pause' : 'Start'}</h3>
          ) : (
            <h3>Restart</h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default Timer
