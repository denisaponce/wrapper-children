import Imagen from './Imagen';
import MenuItems from './MenuItems';

import img from '../../assets/image/logo-fares.svg';

import './Header.css';

const Header = () => {
  const menus = ['Home', 'Abouts Us', 'Contant Us'];

  return (
    <div className='bg-header'>
      <div className='header-container'>
        <Imagen img = {img} type='logo' alt='Fares' />
        <MenuItems items = {menus} direction='Horizontal' />
      </div>
    </div>
  )
};
export default Header;



