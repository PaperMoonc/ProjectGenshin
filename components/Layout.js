//import { Children } from 'react/cjs/react.production.min'
import Navbar from './Navbar'
 
const Layout = ({children}) => (
    <>
    <Navbar/>

    <main className='container py-5'>
    {children}
    </main>
    
    </>
)

export default Layout;