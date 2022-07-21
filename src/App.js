import React from 'react'
import './components/category-item/categories.styles.scss'
import categories from './components/category-item/categories'
import Directory from './components/directory/Directory.component'

const App = () => {
  return <Directory categories={categories} />
}

export default App
