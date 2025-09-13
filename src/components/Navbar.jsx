import React from 'react';
import { HiHome, HiLogin } from 'react-icons/hi';
import { MdLeaderboard } from 'react-icons/md';
import MenuItem from './MenuItem';
import MenuTitle from './MenuTitle';

const Navbar = () => {
  return (
    <div className='menu bg-base-300 rounded-box h-screen flex-col justify-between'>
      <ul className='flex flex-col gap-2'>
        <MenuTitle title={'Sambat'} />
        <MenuItem icon={<HiHome />} path={'/'} label='Home' tooltip='Home' />
        <MenuItem
          path={'/leaderboards'}
          icon={<MdLeaderboard />}
          label='Leaderboards'
          tooltip='Leaderboards'
        />
      </ul>
      <ul className='flex flex-col gap-2'>
        <MenuTitle />
        <MenuItem
          path={'/login'}
          icon={<HiLogin />}
          label='Login'
          tooltip='Login'
        />
      </ul>
    </div>
  );
};

export default Navbar;
