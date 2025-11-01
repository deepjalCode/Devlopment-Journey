import Card from "./assets/Components/Card"

const App = () => {
  return <>
  <div className="parent">
    <Card User='Deepjal'  Age = {20}  image='https://images.unsplash.com/photo-1740498276422-e9df92e4a369?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974' />
    <Card User='Rohit'  Age = {20} image='https://images.unsplash.com/photo-1761393574911-04298dd28835?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470' />
  </div>
  </>
}
export default App