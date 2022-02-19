import {Route, Redirect} from 'react-router-dom';


function ProtectedRoute({component: Component, role, ...props}) {
  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./" />
      }
    </Route>
  )
}

export default ProtectedRoute;