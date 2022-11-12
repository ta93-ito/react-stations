// DO NOT DELETE

import * as React from 'react'
import './App.css'
import axios from 'axios'
/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const firstDogUrl =
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg'
  const [dogUrl, setDogUrl] = React.useState(firstDogUrl)

  const fetchRandomDogApi = () => {
    const randomDogApi = 'https://dog.ceo/api/breeds/image/random'
    var request = new XMLHttpRequest()
    request.open('GET', randomDogApi, false)
    request.send(null)

    return JSON.parse(request.response).message
  }

  return (
    <body>
      <header>Dogアプリ</header>
      <h1>犬の画像を表示するアプリです</h1>
      <img src={dogUrl} />
      <br />
      <button
        onClick={() => {
          setDogUrl(fetchRandomDogApi())
        }}
      >
        更新
      </button>
    </body>
  )
}
