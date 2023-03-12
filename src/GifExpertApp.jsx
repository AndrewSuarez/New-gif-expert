import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  const handleAddCategory = (category) => {
    if(categories.includes(category)) return;
    setCategories([category, ...categories])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        onNewCategory={(category) => handleAddCategory(category)} 
      />

      {/* Listado de Gifs */}
        {categories.map(category => ( 
            <GifGrid key={category} category={category}/>
        ))}
    </>
  )
}
