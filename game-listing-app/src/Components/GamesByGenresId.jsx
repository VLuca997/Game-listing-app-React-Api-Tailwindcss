import React, { useEffect } from 'react'

export default function GamesByGenresId({gameList}) {
    useEffect(()=>{
        console.log("Cocaina ",gameList)
    },[])
  return (
    <div>GamesByGenresId</div>
  )
}
