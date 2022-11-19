// DO NOT DELETE
import React, { useState } from 'react'

export const BreedsSelect = props => {
  const [_, setSelectedBreed] = useState(null)
  return (
    <select>
      {props.breeds.map(breed => (
        <option
          value={breed}
          onChange={() => {
            setSelectedBreed(this.value)
          }}
        >
          {breed}
        </option>
      ))}
    </select>
  )
}
