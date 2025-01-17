import { Outlet } from 'react-router-dom';
import Players from '../players/PLyesrs';
import './layout.css'
function Layout()
{
    return <>
       <nav  className="w-100 bg-primary text-light text-center">
        <h1>playWithMe</h1>
       </nav>
       <section className="bg-primary ">
       <div className="container vh-100">
      <Outlet></Outlet>
       </div>
       </section>
       <footer className="w-100 bg-danger text-center text-light">
        <h3>maked by eng.ahmed hesham</h3>
       </footer>
    </>
}
export default Layout;