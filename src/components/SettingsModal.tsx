import { useState } from 'react'
import ArrowDown from './svg/ArrowDown'
import ArrowUp from './svg/ArrowUp'

type Props = {
  applySettings: (settings: any) => void
}

export default function SettingsModal({ applySettings }: Props) {
  const [pomodoro, setPomodoro] = useState(1500)
  const [shortBreak, setShortBreak] = useState(300)
  const [longBreak, setLongBreak] = useState(900)

  const settings = {
    pomodoro,
    shortBreak,
    longBreak,
  }

  const ONE_MINUTE = 60 //in seconds

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize: '32px',
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Settings
      </div>
      <span style={{ display: 'flex', justifyContent: 'center' }}>
        Time (Minutes)
      </span>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
        }}
      >
        <label>
          pomodoro
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{pomodoro / ONE_MINUTE}</span>
            <div>
              <div onClick={() => setPomodoro(pomodoro + ONE_MINUTE)}>
                <ArrowUp />
              </div>
              <div onClick={() => setPomodoro(pomodoro - ONE_MINUTE)}>
                <ArrowDown />
              </div>
            </div>
          </div>
        </label>
        <label>
          short break
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{shortBreak / ONE_MINUTE}</span>
            <div>
              <div onClick={() => setShortBreak(shortBreak + ONE_MINUTE)}>
                <ArrowUp />
              </div>
              <div onClick={() => setShortBreak(shortBreak - ONE_MINUTE)}>
                <ArrowDown />
              </div>
            </div>{' '}
          </div>
        </label>
        <label>
          long break
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{longBreak / ONE_MINUTE}</span>
            <div>
              <div onClick={() => setLongBreak(longBreak + ONE_MINUTE)}>
                <ArrowUp />
              </div>
              <div onClick={() => setLongBreak(longBreak - ONE_MINUTE)}>
                <ArrowDown />
              </div>
            </div>{' '}
          </div>
        </label>
      </div>
      <div></div>
      <div></div>
      <button onClick={() => applySettings(settings)}>Apply</button>
    </div>
  )
}
