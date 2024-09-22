import React from 'react';

const Gallery = () => {
  const aariWorks = [
    { id: 1, imageUrl: 'path-to-image-1.jpg', title: 'Work 1' },
    { id: 2, imageUrl: 'path-to-image-2.jpg', title: 'Work 2' },
    { id: 3, imageUrl: 'path-to-image-3.jpg', title: 'Work 3' },
    // Add more images and details as needed
  ];

  return (
    <div className="page">
      <h2>Aari Craft Gallery</h2>
      <div className="gallery">
        {aariWorks.map(work => (
          <div key={work.id} className="work">
            <img src={work.imageUrl} alt={work.title} />
            <p>{work.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
