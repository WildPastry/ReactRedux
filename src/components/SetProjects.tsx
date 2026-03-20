import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux";
import { Project } from "../models/app.model";
import { RootState } from "../redux/reducers/rootReducer";
import { Row } from "react-bootstrap";
import projectData from "../utilities/projects.json";
import { setProjects } from "../redux/slices/projectSlice";

export default function SetProjects(): JSX.Element {
  // UseSelector for app theme
  const appTheme = useSelector((state: RootState) => {
    return state.setTheme.appTheme;
  });

  const dispatch = useDispatch<AppDispatch>();

  // Send resized and sorted data to dispatch
  const handleDispatch = useCallback(
    (projects: Project[]) => {
      dispatch(setProjects(projects));
    },
    [dispatch]
  );

  // Resize the current data array
  const resizeData = useCallback(
    (dataArray: Project[], size: number) => {
      const resizedData: Project[] = [].concat(dataArray).slice(0, size);
      handleDispatch(resizedData);
    },
    [handleDispatch]
  );

  // Sort the current data array
  const sortData = useCallback(
    (dataArray: Project[], size: number) => {
      const sortedData: Project[] = []
        .concat(dataArray)
        .sort((a, b) => (a.id > b.id ? 1 : -1));
      resizeData(sortedData, size);
    },
    [resizeData]
  );

  // Sort data on page load
  useEffect(() => {
    sortData(projectData, 9);
  }, [sortData]);

  // Toggle MoreFewer state
  const [showMoreFewer, setShowMoreFewer] = useState(false);

  // ToggleMoreFewer
  const toggleMoreFewer = (size: number) =>
    showMoreFewer === false
      ? (setShowMoreFewer(true), sortData(projectData, size))
      : (setShowMoreFewer(false), sortData(projectData, size));

  // RenderMore button
  const renderMore = () => {
    return (
      <h3
        className={`moreFewer${appTheme}`}
        onClick={() => toggleMoreFewer(18)}
      >
        MORE
      </h3>
    );
  };

  // RenderFewer button
  const renderFewer = () => {
    return (
      <h3 className={`moreFewer${appTheme}`} onClick={() => toggleMoreFewer(9)}>
        FEWER
      </h3>
    );
  };

  // Buttons to show more or fewer projects
  return (
    <Row className="pad">{showMoreFewer ? renderFewer() : renderMore()}</Row>
  );
}
