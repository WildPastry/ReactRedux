import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { RootState } from "../redux/reducers/rootReducer";
import { setImgTheme } from "../redux/slices/themeSlice";

export default function ImgTheme(): JSX.Element {
  const dispatch = useDispatch();

  // UseSelector for img theme
  const ImgTheme = useSelector((state: RootState) => {
    return state.setTheme.imgTheme;
  });

  // Handle function for img theme
  const handleImgTheme = () => {
    let currentTheme: string;
    ImgTheme === "DARK" ? (currentTheme = "LIGHT") : (currentTheme = "DARK");
    dispatch(setImgTheme(currentTheme));
  };

  return (
    <React.Fragment>
      <img
        className={"imgThemeIcon"}
        src={require("./../icon/rgb.svg")}
        onClick={() => handleImgTheme()}
        alt="RBG Icon"
      />
    </React.Fragment>
  );
}
