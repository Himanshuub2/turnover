// components/Navbar.tsx
import React from 'react';
import cartIcon from '../assets/cart.svg'
import searchIcon from '../assets/search.svg'
import Image from 'next/image';
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'

type NavbarItem = {
  name: string;
  href: string;
};

const navbarItems: NavbarItem[] = [
  { name: 'Categories', href: '/categories' },
  { name: 'Sale', href: '/sale' },
  { name: 'Clearance', href: '/clearance' },
  { name: 'New stock', href: '/new-stock' },
  { name: 'Trending', href: '/trending' }
];

const userItems: NavbarItem[] = [
  { name: 'Help', href: '/help' },
  { name: 'Orders & Returns', href: '/orders-returns' },
  { name: 'Hi, John', href: '/profile' }
];

const Header: React.FC = () => {
  return (
    <nav className="bg-white h-[100px]   flex flex-col items-center justify-center">
        <div className="w-11/12 space-x-4 flex justify-end h-[36px] items-center">
          {userItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:underline">
              {item.name}
            </a>
          ))}
        </div>

      <div className="flex w-11/12 h-[64px] justify-between items-center ">
        <span className="text-xl font-bold">ECOMMERCE</span>
        <div className="hidden md:flex space-x-4">
          {navbarItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:underline">
              {item.name}
            </a>
          ))}
        </div>
        <div className='flex gap-x-4'>
          <Image src={searchIcon} alt='Search' />
          <Image src={cartIcon} alt='Cart' />
        </div>
      </div>
      
      <div className='bg-gray-200 w-full h-[36px] flex justify-center'>
        <div className='flex justify-center items-center gap-x-2'>
            <Image src={leftArrow} alt='left'/>
            Get 10% off on business sign up
            <Image src={rightArrow} alt='right'/>
        </div>
      </div>
    </nav>
  );
};

export default Header;
