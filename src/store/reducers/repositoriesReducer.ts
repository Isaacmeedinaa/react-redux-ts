import { RepositoriesActionTypes } from '../types/repositoriesTypes'
import { RepositoriesActionsInterfaces } from '../actions/repositoriesActionsInterfaces'

interface RepositoriesState {
  loading: Boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const repositoriesReducer = (state: RepositoriesState = initialState, action: RepositoriesActionsInterfaces): RepositoriesState => {
  switch (action.type) {
    case RepositoriesActionTypes.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: []
      }

    case RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload
      }

    case RepositoriesActionTypes.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: []
      }

    default:
      return state;
  }
}; 

export default repositoriesReducer;