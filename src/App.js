// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/brleeds/spaniel-brittany/n02101388_6057.jpg',
  )
  return (
    <body>
      <header>Dogアプリ</header>
      <h1>犬の画像を表示するアプリです</h1>
      <img src={dogUrl} />
    </body>
  )
}
