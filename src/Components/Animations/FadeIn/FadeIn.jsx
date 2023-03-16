import React, { useState } from 'react'
import MovingComponent from 'react-moving-text'

const AnimationsForChaining = ["fadeInFromBottom"]

const AnimationChain = () => {

  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex+1)
    setAnimationType([animationIndex+1])
  }

  return (
    <MovingComponent
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="1000ms"
      timing="ease"
      fillMode="forwards"
      iteration={1}>
      Hi l'm LEMOUDDENE Anass. A passionate Designer and Front End Developer based in Morocco.
    </MovingComponent>
  )
}

export default AnimationChain