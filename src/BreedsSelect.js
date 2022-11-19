// DO NOT DELETE
import React, { useState } from 'react'

export const BreedsSelect = props => {
  const [selectedBreed, setSelectedBreed] = useState()
  return (
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
  )
}
