import { useLoaderData } from "react-router";

const Browse = () => {
  const movies = useLoaderData()
  console.log('In component - ', movies)
  return (
    <div>Hellooo</div>
  )
}

export default Browse