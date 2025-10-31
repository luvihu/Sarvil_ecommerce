import type { AnyAction } from 'redux';
import { ALL_PROJECTS , CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, PROJECT_ERROR} from "../actionsTypes";
import type { IProject } from '../../components/interfaces/Interfaces';

export interface ProjectState {
  projects: IProject[] | null;
  error: string | null;
};

const initialState: ProjectState = {
  projects: null,
  error: null,
};

const projectReducer = (state= initialState, action:AnyAction): ProjectState => {
  switch (action.type) {
    case ALL_PROJECTS:
        return {
        ...state,
        projects: action.payload,
        error: null
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...(state.projects || []), action.payload],
        error: null
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects?.filter(project => project.id !== action.payload) || [], 
        error: null
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects?.map(project => project.id === action.payload.id ? action.payload : project) || [], 
        error: null
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: action.payload,
       };
    default:
      return state;
  }
}
export default projectReducer
