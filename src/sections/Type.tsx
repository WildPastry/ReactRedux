import React, { useEffect, useRef } from "react";
import { RootState } from "../redux/reducers/rootReducer";
import { initType } from "../utilities/type";
import { useSelector } from "react-redux";

// Type
const Type: React.FC = () => {
  // UseSelector for app theme
  const appTheme = useSelector((state: RootState) => {
    return state.setTheme.appTheme;
  });

  // Handle reference to external JS fucntion
  function useHandleSpace<T extends HTMLElement>() {
    const currentRef = useRef<T>(null);
    return { ref: currentRef };
  }

  const { ref: typeRef } = useHandleSpace<HTMLDivElement>();

  // Load external JS function
  useEffect(() => initType(), [appTheme]);

  return (
    <React.Fragment>
      <div aria-label="Animated Typography Section" className="typeWrap pad">
        <p className={`textHide text${appTheme}`}>
          <span className="textThis">this </span>site built with react
          <span className="textLightGrey text400"> / </span>redux
          <span className="textLightGrey text400"> / </span>typescript
        </p>
        <div
          id="type"
          className={`text${appTheme}`}
          ref={typeRef as React.RefObject<HTMLDivElement>}
        />
      </div>
      <div className="lineNoMar" />
    </React.Fragment>
  );
};

// EXPORT Type
Type.displayName = "Type";
export default Type;
