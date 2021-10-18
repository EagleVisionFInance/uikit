import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#dc00ff",
  primaryBright: "#ffb948",
  primaryDark: "#dc00ff",
  secondary: "#ffb948",
  success: "#31D0AA",
  warning: "#FFB237",
  };
  
  export const brandColors = {
    binance: "#F0B90B",
  };
  
  export const lightColors: Colors = {
    ...baseColors,
    ...brandColors,
    primary: "#FFA92A",
    secondary: "#8CC63F", 
    background: "#E5E5E5",
    backgroundDisabled: "#E9EAEB",
    contrast: "#261d13",
    invertedContrast: "#FFFFFF",
    input: "#f4efea",
    // inputBorder: "#cccccc",
    inputSecondary: "#cccccc",
    tertiary: "#E2DFE1",
    text: "#433734",
    textMenu: "#969BA0",
    textDisabled: "#BDC2C4",
    textSubtle: "#433734",
    activeButton: "#397f49",
    borderColor: "#E9EAEB",
    card: "#FFFFFF",
    nav: "#FFFFFF",
    priceBacground: "#FFFFFF",
    priceBorder: "#433734",
    swapMenuBack: "#5F4D60",
    swapMenuActive: "#230133",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    },
  };
  
  export const darkColors: Colors = {
    ...baseColors,
    ...brandColors,
    primary: "#FFA92A",
    secondary: "#8CC63F", 
    background: "#2B373D",
    backgroundDisabled: "#423d37",
    contrast: "#FFFFFF",
    invertedContrast: "#261e13",
    input: "#5a4d3f",
    // inputBorder: "#cccccc",    
    inputSecondary: "#cccccc",
    tertiary: "#566167",
    text: "#ffffff",
    textMenu: "#ffffff",
    textDisabled: "#716a61",
    textSubtle: "#ffffff",
    activeButton: "#397f49",
    borderColor: "#63584b",
    card: "#38454C",
    nav: "#38454C",
    priceBacground: "#3D5A6A",
    priceBorder: "#2B373D",
    swapMenuBack: "#5F4D60",
    swapMenuActive: "#230133",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #893e92 0%, #3a0e40 100%)",
    },
  };