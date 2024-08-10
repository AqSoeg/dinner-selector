import { useState, useEffect } from 'react'
import './App.css'

function Roller({ dishes, currentIndex, setCurrentIndex, isRoll }) {
  if (isRoll) {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length)
    }, 50)
  }
  return (
    <div>
      <p className='py-6 text-xl'>{dishes[currentIndex]}</p>
    </div>
  )
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRoll, setIsRoll] = useState(false)
  const dishes = [
    '重庆小面',
    '东北饺子',
    '朱新年',
    '兰州拉面',
    '山东饺子',
    '油泼面',
  ]

  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>晚上吃什么？</h1>
          <Roller
            dishes={dishes}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            isRoll={isRoll}
          />
          <button
            className='btn btn-primary'
            onClick={() => setIsRoll(!isRoll)}
          >
            {isRoll ? '停！' : '随机一下'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
