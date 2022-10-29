import React, { useCallback, useRef } from 'react'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LazyLoad from 'react-lazyload';


const ViewImage = ({ img, alt, className }) => {

  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);


  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      <a href={img}>
        <LazyLoad height={250} offset={100}>
          <img src={img} alt={alt} className={className} />
        </LazyLoad>
      </a>
    </LightGallery>
  )
}
export default ViewImage
