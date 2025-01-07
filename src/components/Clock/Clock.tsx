import React, { useState, useEffect } from 'react'

const Clock = () => {
    const [currentTime, setCurrentTime] = useState<string>('')

    const updateClock = () => {
        const date = new Date()
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        const seconds = date.getSeconds().toString().padStart(2, '0')
        setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }

    useEffect(() => {
        updateClock()
        const intervalId = setInterval(updateClock, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className="py-1 px-3 rounded-md shadow-inner hover:shadow-none hover:cursor-pointer shadow-gray-300 dark:shadow-gray-800 border">
            <h2>Current Time: {currentTime}</h2>
        </div>
    )
}

export default Clock
