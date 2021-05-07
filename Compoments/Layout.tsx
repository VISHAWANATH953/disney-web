import Navbar from './Navbar'
import Header from './Header'
const Layout = ({ children }:any) => {
    return (
        <>
            <Header/>
            <Navbar />
            {children}
        </>
    )
}

export default Layout
