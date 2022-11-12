// DO NOT DELETE

import * as React from 'react'
import './App.css'
/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const firstDogUrl =
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg'
  const [dogUrl, setDogUrl] = React.useState(firstDogUrl)
  const randomDogApi = 'https://dog.ceo/api/breeds/image/random'

  return (
    <body>
      <header>Dogアプリ</header>
      <h1>犬の画像を表示するアプリです</h1>
      <img src={dogUrl} />
      <br />
      <button
        onClick={() => {
          fetch(randomDogApi)
            .then(res => {
              return res.json()
            })
            .then(data => {
              setDogUrl(data.message)
            })
        }}
      >
        更新
      </button>
    </body>
  )
}
