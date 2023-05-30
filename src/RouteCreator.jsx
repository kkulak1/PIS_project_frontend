import ProtectedRoute from './components/ProtectedRoute'


export default class RouteCreator {
  constructor(backendAddress, defaultFailurePage=null) {
    this.backendAddress = backendAddress 
    this.defaultFailurePage = defaultFailurePage 
  }

  createRoute(givenPath, givenElement) {
    return {
      path: givenPath,
      element: givenElement
    }
  }

}

