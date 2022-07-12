import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddEdit from "./pages/AddEdit";
import MainPage from "./pages/Main";
function Photo(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/add`} component={AddEdit} />
      <Route path={`${match.url}/:photoId`} component={AddEdit} />
    </Switch>
  );
}

export default Photo;
