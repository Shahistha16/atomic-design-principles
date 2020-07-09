import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchBar from './index'

storiesOf('Molecules', module).add('searchBar', () => (
  <div style={{ padding: 10 }}>
    <SearchBar></SearchBar>
  </div>
))
