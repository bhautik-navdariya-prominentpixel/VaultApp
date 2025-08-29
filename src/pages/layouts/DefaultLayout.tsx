import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "../../contexts/theme-context";
import { ThemeEnum } from "../../common/enums/inde";
import { useEffect, useState } from "react";
import { getAppTheme, setAppTheme } from "../../utils/theme-util";
import { ChevronLeft, ChevronRight, MoonIcon, SunMedium } from "lucide-react";

const DefaultLayout = () => {
  const [theme, setTheme] = useState<ThemeEnum>(getAppTheme());
  function chnageTheme(theme: ThemeEnum){
    setTheme(theme);
    setAppTheme(theme);
    setIsThemeMenuOpen(false);
  }
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState<boolean>(false);

  useEffect(()=>{
    setAppTheme(theme);
  }, [])
  return (
    <>
      <ToastContainer />
      <ThemeContext.Provider value={theme}>
        <div className='bg-black absolute right-0 top-[50%] flex rounded-s border border-gray-500 border-r-0'>
          <div onClick={() => setIsThemeMenuOpen((themeMenuOpen) => !themeMenuOpen)}>
            {isThemeMenuOpen ? (
              <ChevronRight className='text-white cursor-pointer rounded-4xl hover:bg-gray-500 duration-500' />
            ) : (
              <ChevronLeft className='text-white cursor-pointer rounded-4xl hover:bg-gray-500 duration-500' />
            )}
          </div>
          {isThemeMenuOpen && theme === ThemeEnum.LIGHT ? (
            <MoonIcon
              className='text-white cursor-pointer rounded-4xl hover:bg-gray-500 duration-500'
              onClick={() => chnageTheme(ThemeEnum.DARK)}
            />
          ) : (
            isThemeMenuOpen && (
              <SunMedium
                className='text-white cursor-pointer rounded-4xl hover:bg-gray-500 duration-500'
                onClick={() => chnageTheme(ThemeEnum.LIGHT)}
              />
            )
          )}
        </div>
        <div className='bg-white dark:bg-gray-900 '>
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default DefaultLayout;
