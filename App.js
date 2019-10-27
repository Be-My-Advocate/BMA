import React from 'react';
import AppNavigator from './client/AppNavigator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faChevronLeft, faChevronRight, faSearch, faMap, faUser, faList, faFilter, faNotesMedical, faUserCircle, faHome, faCommentAlt, faListAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import {StyleSheet} from 'react-native'

library.add(fab, faChevronLeft, faChevronRight, faSearch, faCoffee, faUser, faMap, faList, faFilter, faNotesMedical, faUserCircle, faChevronLeft, faHome, faCommentAlt, faListAlt, faAddressBook )

const styles = StyleSheet.create({
  // appNav: {
  //   backgroundColor: 'blue'
  // }
});

export default function App() {
  return (
    <AppNavigator/>
  );
}


