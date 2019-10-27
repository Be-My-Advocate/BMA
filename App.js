import React from 'react';
import AppNavigator from './client/AppNavigator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faFilter, faNotesMedical, faUserCircle, faChevronLeft, faHome, faCommentAlt, faListAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee, faFilter, faNotesMedical, faUserCircle, faChevronLeft, faHome, faCommentAlt, faListAlt, faAddressBook )


export default function App() {
  return (
    <AppNavigator/>
  );
}


