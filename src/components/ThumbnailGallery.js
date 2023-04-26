/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css, jsx } from '@emotion/core'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './ThumbnailGrid'

const ThumbnailGallery = () => {
 
  const [activeIndex, setActiveIndex] = useState(0)
  const [thumbnails, setThumbnails] = useState([
    {
     imgUrl: require('./expkashmir/Gulmarg.jpg').default,
      title: "Gulmarg",
      bodyText: "Gulmarg literally means “Meadow of flowers.--Gulmarg is the crowning glory of Jammu & Kashmir and is located 2,650 meters above sea level. Known as the “Meadow of Flowers”,"
    },
    {
        imgUrl: require('./expkashmir/phalgam.jpg').default,
      title: "Pahalgam",
      bodyText: "Pahalgam is famous for its scenic beauty and is the jewel of the picturesque Liddar valley in the high Himalayas.(Kashmir, where heaven touches the earth.)"
    },
  
  ]);
  
 

  const renderThumbnails = () =>
    thumbnails.length ? (
      <>
        <ActiveThumbnailWindow activeThumbnail={thumbnails[activeIndex]} />
        <ThumbnailGrid thumbnails={thumbnails} onClick={handleClick} />
      </>
    ) : null

  const renderTextContent = () =>
    thumbnails.length ? (
      <>
        <h1>{thumbnails[activeIndex].title}</h1>
        <p>{thumbnails[activeIndex].bodyText}</p>
      </>
    ) : null

  const handleClick = e => {
    const activeIndex = e.target.getAttribute('data-index')
    setActiveIndex(activeIndex)
  }

  return (
    <div css={ThumbnailGalleryCSS}>
      <div className="left">{renderThumbnails()}</div>
      <div className="right">{renderTextContent()}</div>
    </div>
  )
}

const ThumbnailGalleryCSS = css`
  background: #ddd;
  height: 500px;
  width: 1024px;
  margin: 40px auto;
  display: flex;

  .left,
  .right {
    flex: 1;
  }

  .right {
    padding: 40px;
  }
`

export default ThumbnailGallery
