import { createContext } from "react";
import { ThemeEnum } from "../common/enums/inde";


export const ThemeContext = createContext<ThemeEnum>(ThemeEnum.LIGHT);