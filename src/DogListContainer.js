// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const DogListUrl = 'https://dog.ceo/api/breeds/list/all'
  const [breedList, setBreeds] = useState()

  useEffect(() => {
    fetch(DogListUrl)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBreeds(Object.keys(data.message))
      })
  }, [])

  return <BreedsSelect breeds={breedList} />
}
