import { useState, useEffect } from 'react'

export default function Roller({ dishes, isRoll, isPause }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  // const [selectedDishes, setSelectedDishes] = useState([])

  useEffect(() => {
    let intervalId
    if (isRoll) {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % dishes.length)
      }, 50)
    }
    return () => clearInterval(intervalId)
  }, [dishes.length, isRoll])

  return (
    <div className='h-20'>
      <p className='py-6 text-xl'>
        {isRoll || isPause ? dishes[currentIndex].name : '随机一下吧'}
      </p>
    </div>
  )
}
