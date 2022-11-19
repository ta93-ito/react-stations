// DO NOT DELETE
import React from 'react'
import { Dogimage } from './DogImage'

export const Description = () => {
  const firstDogUrl =
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg'
  const [dogUrl, setDogUrl] = React.useState(firstDogUrl)
  const randomDogApi = 'https://dog.ceo/api/breeds/image/random'

  return (
    <div className="main-container">
      <p style={{ margin: '0px 236px', fontSize: '22px' }}>
        犬の画像を表示するアプリです
      </p>
      <div className="img-container">
        <Dogimage url={dogUrl} />
        <br />
        <div
          className="update-button"
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
        </div>
      </div>
    </div>
  )
}
