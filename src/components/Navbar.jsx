import React, { useEffect } from 'react';
import { HiHome, HiLogin, HiLogout } from 'react-icons/hi';
import { MdLeaderboard } from 'react-icons/md';
import MenuItem from './MenuItem';
import MenuTitle from './MenuTitle';
import { useDispatch, useSelector } from 'react-redux';
import { asyncIsPreload } from '../states/isPreload/action';
import { asyncLogout } from '../states/authUser/action';

const Navbar = () => {
  const dispatch = useDispatch();
  const isPreload = useSelector((state) => state.isPreload);
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(asyncIsPreload());
  }, [dispatch]);

  const onLogOut = () => {
    dispatch(asyncLogout());
  };

  if (isPreload) {
    return null;
  }

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
        <MenuTitle
          title={authUser ? authUser.name || authUser.email : undefined}
        />
        {authUser ? (
          <MenuItem
            onClick={onLogOut}
            icon={<HiLogout />}
            label='Logout'
            tooltip='Logout'
          />
        ) : (
          <MenuItem
            path='/login'
            icon={<HiLogin />}
            label='Login'
            tooltip='Login'
          />
        )}
      </ul>
    </div>
  );
};

export default Navbar;
