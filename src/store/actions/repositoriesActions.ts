import axios from 'axios';
import {Dispatch} from 'redux'

import { RepositoriesActionTypes } from '../types/repositoriesTypes';
import { RepositoriesActionsInterfaces } from './repositoriesActionsInterfaces';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<RepositoriesActionsInterfaces>) => {
    dispatch({ type: RepositoriesActionTypes.SEARCH_REPOSITORIES });

    try {
      const { data } = await axios.get("http://registry.npmjs.org/-/v1/search", { params: { text: term } });

      const names = data.objects.map((result: any) => result.package.name);

      dispatch({ type: RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS, payload: names });
    } catch (err) {
      dispatch({ type: RepositoriesActionTypes.SEARCH_REPOSITORIES_ERROR, payload: err.message });
    }
  }
}