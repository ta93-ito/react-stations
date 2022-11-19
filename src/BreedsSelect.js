// DO NOT DELETE
import React, { useState } from 'react'

export const BreedsSelect = props => {
  const [selectedBreed, setSelectedBreed] = useState(null)
  return (
    <select
      onChange={value => {
        setSelectedBreed(value)
      }}
    >
      {props.breeds.map(breed => (
        <option value={breed}>{breed}</option>
      ))}
    </select>
  )
}
