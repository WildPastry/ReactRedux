import { setNav, setProject } from "../redux/slices/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { MDBAnimation } from "mdbreact";
import { Project } from "../models/app.model";
import React from "react";
import { RootState } from "../redux/reducers/rootReducer";

export default function ProjectItem({
  id,
  fields,
  name,
  thumb,
}: Project): JSX.Element {
  const appTheme = useSelector((state: RootState): string => {
    return state.setTheme.appTheme;
  });

  const dispatch = useDispatch();

  const handleNav = (section: string, id: number): void => {
    // Set current project using ID then navigate to correct section and scroll to top
    dispatch(setProject(id));
    dispatch(setNav(section));
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <Col xs={12} sm={6} md={4}>
        <MDBAnimation type="zoomIn">
          <img
            aria-label="Project Gallery Image"
            src={require(`./../img/thumb/${thumb[0]}`)}
            onClick={() => handleNav("PROJECT", id)}
            className={"imgWrap"}
            alt={name}
          />
        </MDBAnimation>
        <div
          aria-label="Project Gallery Description"
          className="descriptionWrap"
        >
          <p className={`text700 textMed${appTheme}`}>{name}</p>
          <p className={`text400 textFlip${appTheme}`}>
            {fields[0]}
            <span className="textLightGrey text400"> / </span>
            {fields[1]}
            <span className="textLightGrey text400"> / </span>
            {fields[2]}
          </p>
        </div>
      </Col>
    </React.Fragment>
  );
}
