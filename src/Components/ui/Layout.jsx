import Footer from './Footer';
import Header from './Header';

import './Layout.css';

const Layout = ({ children }) => {
  retur(
    <div className='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
