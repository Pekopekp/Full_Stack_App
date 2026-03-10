import Hello from "../../component/hello"

const Home = () => {
  console.log('I am server component');
  return (
    <main>
      <div className="text-5xl underline">Welcome to next js</div>
      <Hello/>
    </main>
  )
}

export default Home