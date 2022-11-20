// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const DogListUrl = 'https://dog.ceo/api/breeds/list/all'
  const [breeds, setBreeds] = useState()
  const [dogImageUrls, setDogImageUrls] = useState([])

  useEffect(() => {
    fetch(DogListUrl)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBreeds(Object.keys(data.message))
      })
  }, [])
  // setImageListを渡す
  return (
    <>
      <BreedsSelect breeds={breeds} setDogImageUrls={setDogImageUrls} />
      <ul>
        {dogImageUrls.map(url => (
          <li>
            <img src={url} />
          </li>
        ))}
      </ul>
    </>
  )
}
