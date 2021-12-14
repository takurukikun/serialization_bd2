import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import animationCircle from './circle-loader.json'

import { Container } from './styles'

export default function Loading(): JSX.Element {
  return (
    <Container>
      <Player
        autoplay
        loop
        speed={1.5}
        src={animationCircle}
        style={{ height: '300px', width: '300px' }}
      />
    </Container>
  )
}
