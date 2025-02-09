import React from 'react';
import logo from '../assets/powerpdf.png';

const Header: React.FC = () => {
  return (
    <header className='w-full h-[200px] bg-blue-500 flex justify-center items-center'>
      <div className='w-[226px] h-[48px] text-white text-2xl font-bold flex items-center justify-center'>
        <img src={logo} alt='PowerPDF Logo' className='w-[226px] h-[48px]' />
      </div>
    </header>
  );
};

export default Header;