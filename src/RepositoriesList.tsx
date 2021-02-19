import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { searchRepositories } from "./store/actions/repositoriesActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");

  const dispatch = useDispatch();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const onSearchRepoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={onSearchRepoSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error ? <h3>{error}</h3> : null}
      {loading ? <h3>loading...</h3> : null}
      {!loading && !error
        ? data.map((name, index) => <p key={index}>{name}</p>)
        : null}
    </div>
  );
};

export default RepositoriesList;
