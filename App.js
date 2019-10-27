import React from 'react';
import AppNavigator from './client/AppNavigator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import BottomNavBar from './client/AdvocateNavBar'

library.add(fab, faCheckSquare, faCoffee)


export default function App() {
  return (
    //<BottomNavBar/>
    <AppNavigator/>
  );
}


