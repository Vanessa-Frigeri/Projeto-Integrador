import React from 'react';
import {
  PathList,
  PathListItem,
  PathListItemLink
} from './PathElements';

const Path = (props) => (
  <>
    <PathList>
      <PathListItem>
        <PathListItemLink to="/task">{props.children}</PathListItemLink>          
      </PathListItem>
    </PathList>
  </>
);

export default Path;