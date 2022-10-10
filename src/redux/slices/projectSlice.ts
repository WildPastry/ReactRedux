import { AppDispatch, AppThunk } from '..';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { setError, setLoading } from './loadSlice';
import { Project } from '../../models/app.model';

// Set initialState
const initialState: Project[] = [];

/*
 * Create projectSlice function with combined actions
 * Including: Reset projects, set projects and filter projects
 */
const projectSlice = createSlice({
  name: 'setProjects',
  initialState,
  reducers: {
    resetProjects: () => initialState,
    setProjects(state, action: PayloadAction<Project[]>) {
      action.payload.forEach((proj: Project) => state.push(proj));
    },
    setFilters(state, action: PayloadAction<Project>) {
      const project = state.find((project) => project.id === action.payload.id);
      if (project) {
        project.filtered = !project.filtered;
      }
    }
  }
});

// Export filter actions from projectSlice
export const { setFilters } = projectSlice.actions;

export const setProjects =
  (projects: Project[]): AppThunk => (dispatch: AppDispatch) => {
    try {
      // Reset projects first
      dispatch(projectSlice.actions.resetProjects());
      // Map each project
      const setProject: Project[] = projects.map((proj) => ({
        id: proj.id,
        desc: proj.desc,
        name: proj.name,
        fields: proj.fields,
        type: proj.type,
        client: proj.client,
        timeline: proj.timeline,
        website: proj.website,
        thumb: proj.thumb,
        images: proj.images,
        icons: proj.icons,
        intro: proj.intro,
        url: proj.url,
        git: proj.git,
        gitUrl: proj.gitUrl,
        filtered: false
      }));
      // Dispatch projects once finished mapping
      dispatch(projectSlice.actions.setProjects(setProject));
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1500);
    } catch (err) {
      // Create error page if failed
      dispatch(setError(true));
    }
  };

// Export reducer
export default projectSlice.reducer;
