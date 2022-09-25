import { useDispatch, useSelector } from 'react-redux';
import { ProjectFilter } from '../types';
import React from 'react';
import { RootState } from '../redux/reducers/rootReducer';
import { setProjectFilter } from '../redux/slices/filterSlice';

interface FilterButtonProps {
  projectFilter: ProjectFilter;
  text: string;
}

// FilterButton
export default function FilterButton({
  projectFilter,
  text
}: FilterButtonProps): JSX.Element {
  // UseSelector for app theme
  const appTheme = useSelector((state: RootState) => {
    return state.setTheme.appTheme;
  });

  const dispatch = useDispatch();

  // Show visible filter
  const visibleFilter = useSelector((state: RootState) => state.setFilters);

  return (
    <h4
      className={`${
        visibleFilter === projectFilter
          ? `filterItem filterItem${appTheme} filterItem${appTheme}Active`
          : `filterItem filterItem${appTheme}`
      }`}
      onClick={() => dispatch(setProjectFilter(projectFilter))}>
      {text}
    </h4>
  );
}
