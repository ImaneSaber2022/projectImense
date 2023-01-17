import React from "react";
import { Route } from "react-router-dom";

export function Router({
  component: Component,
  layout: Layout,
  ...props
}) {
  return (
    <Route {...props}>
      {(routeProps) => {
        return (
          <Layout {...props}>
            <Component {...routeProps} />
          </Layout>
        );
      }}
    </Route>
  );
}