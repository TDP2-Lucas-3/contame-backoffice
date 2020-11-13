import React from 'react';
import {Link} from 'react-router-dom';
export const renderTitle = (row) => {
  return (
    <div>
      <Link
        key={row.id}
        to={`/incidents/${row.id}`} //Provisorio
        style={{textDecoration: 'none', fontWeight: 'bold'}}>
        {`${row.title} `}
      </Link>
    </div>
  );
};
