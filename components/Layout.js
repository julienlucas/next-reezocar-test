import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  const preventDragHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div onDragStart={(e) => preventDragHandler(e)}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}