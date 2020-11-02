import React from 'react';
import {Link} from 'react-router-dom';

export const renderImagesCollection = (row) => {
  return (
    <div>
      {row.images.length > 0
        ? row.images.map((image, index) => {
            return (
              <Link
                key={index}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: 'none'}}>
                {`${++index} `}
              </Link>
            );
          })
        : 'N/A'}
    </div>
  );
};

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
