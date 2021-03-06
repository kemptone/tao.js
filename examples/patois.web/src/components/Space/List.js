import React from 'react';
import TAO from '@tao.js/core';

const SpaceItems = ({ spaces }) =>
  spaces.map(s => {
    const Space = s;
    return (
      <li key={s._id}>
        <button
          onClick={e =>
            TAO.setCtx({ t: 'Space', a: 'Find', o: 'Portal' }, { Find: Space })
          }
        >
          {s.name}
        </button>
      </li>
    );
  });

const SpaceList = ({ Space }) => (
  <div>
    <h1>Current list of Spaces</h1>
    <h3>
      <button onClick={e => TAO.setCtx({ t: 'Space', a: 'New', o: 'Portal' })}>
        New
      </button>
    </h3>
    <ul>
      <SpaceItems spaces={Space} />
    </ul>
  </div>
);

export default SpaceList;
