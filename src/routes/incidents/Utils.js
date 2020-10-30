import React from 'react';

export const renderImagesCollection = (row) => {
  return (
    <div>
      {row.images.length > 0
        ? row.images.map((image, index) => {
            return (
              <a
                key={index}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: 'none'}}>
                {`${++index} `}
              </a>
            );
          })
        : 'N/A'}
    </div>
  );
};
