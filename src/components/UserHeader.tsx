import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../store/auth-slice";
import type { StoreType } from "../store";
import { Bell, LogOut, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserHeader = () => {
  const dispach = useDispatch();
  const currentUser = useSelector((store: StoreType) => store.auth.user);
  const [menuOpen, setMenuOpen] = useState(false);
  function onLogoutHandler() {
    dispach(logOutUser());
  }
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <header className='w-full border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo / Brand */}
        <h1 className='text-2xl font-bold text-slate-800 dark:text-slate-200'>VaultPay</h1>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6 text-slate-700 dark:text-slate-300 font-medium'>
          <NavLink
            to='/user/'
            className='hover:text-slate-900 dark:hover:text-white'
            style={({ isActive }) => (isActive ? { textDecoration: "underline" } : undefined)}
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            to='/user/transactions'
            className='hover:text-slate-900 dark:hover:text-white'
            style={({ isActive }) => (isActive ? { textDecoration: "underline" } : undefined)}
          >
            Transactions
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className='flex items-center space-x-4'>
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className='px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-sm hover:scale-105 transition-all hover:bg-gray-200 dark:hover:bg-gray-600'
          >
            {isDarkMode ? "🌞 Light" : "🌙 Dark"}
          </button> */}

          {/* Notifications */}
          <button className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'>
            <Bell className='w-5 h-5 text-gray-700 dark:text-gray-300' />
          </button>

          {/* Profile Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'
            >
              <span className='text-slate-700 dark:text-slate-200'>{currentUser.firstName}</span>
              <img
                src='https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE='
                alt='profile'
                className='w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600'
              />
            </button>

            {menuOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-20'>
                <button
                  className='w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-left flex items-center gap-2'
                  onClick={onLogoutHandler}
                >
                  <LogOut className='w-4 h-4' />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className='md:hidden flex items-center text-gray-700 dark:text-gray-300'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className='md:hidden border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-4 space-y-4'>
          <a href='/dashboard' className='block text-slate-700 dark:text-slate-300'>
            Dashboard
          </a>
          <a href='/transactions' className='block text-slate-700 dark:text-slate-300'>
            Transactions
          </a>
          <a href='/cards' className='block text-slate-700 dark:text-slate-300'>
            Cards
          </a>
          <a href='/payments' className='block text-slate-700 dark:text-slate-300'>
            Payments
          </a>
        </nav>
      )}
    </header>
  );
};

export default UserHeader;
