import categories from '../../components/category-item/categories'
import Directory from '../../components/directory/Directory.component'

const Home = () => {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  )
}

export default Home
