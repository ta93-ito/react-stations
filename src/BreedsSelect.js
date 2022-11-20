// DO NOT DELETE
import React, { useState } from 'react'

export const BreedsSelect = props => {
  const [selectedBreed, setSelectedBreed] = useState()
  const dogByBreedUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`

  return (
    <>
      <select
        value={selectedBreed}
        onChange={e => {
          setSelectedBreed(e.target.value)
        }}
      >
        <option value={''}>犬種を選択してください</option>
        {props.breeds?.map(breed => (
          <option value={breed}>{breed}</option>
        ))}
      </select>
      <button
        className="display-button"
        onClick={() => {
          fetch(dogByBreedUrl)
            .then(res => {
              return res.json()
            })
            .then(data => {
              props.setDogImageUrls(data.message)
            })
        }}
      >
        表示
      </button>
    </>
  )
}
