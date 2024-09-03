import { useState } from 'react'
import Roller from './components/Roller'
import './App.css'

function App() {
  const [isRoll, setIsRoll] = useState(false)
  const [isPause, setIsPause] = useState(false)
  const dishes = [
    {
      id: 1,
      name: '重庆小面',
      location: '十全街',
    },
    {
      id: 2,
      name: '滨寿司',
      location: '仓街',
    },
    {
      id: 3,
      name: '东北饺子',
      location: '十全街',
    },
    {
      id: 4,
      name: '朱新年',
      location: '双塔',
    },
    {
      id: 5,
      name: '兰州拉面',
      location: '相门后庄',
    },
    {
      id: 6,
      name: '油泼面',
      location: '十全街',
    },
  ]

  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>晚上吃什么？</h1>
          <Roller dishes={dishes} isRoll={isRoll} isPause={isPause} />
          <button
            className='btn btn-primary'
            onClick={() => {
              if (isRoll) {
                setIsPause(true)
              } else {
                setIsPause(false)
              }
              setIsRoll(!isRoll)
            }}
          >
            {isRoll ? '停！' : '开始'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
