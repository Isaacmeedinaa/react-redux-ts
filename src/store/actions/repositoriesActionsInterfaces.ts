import { RepositoriesActionTypes } from '../types/repositoriesTypes'

interface SearchRepositoriesAction {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[]
}

interface SearchRepositoriesErrorAction {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string
}

export type RepositoriesActionsInterfaces = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;