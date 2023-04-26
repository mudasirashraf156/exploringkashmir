/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css, jsx } from '@emotion/core'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './ThumbnailGrid'
import image1 from "./EXPLORING KASHMIR/k.jpg"
const ThumbnailGallery = () => {
 
  const [activeIndex, setActiveIndex] = useState(0)
  const [thumbnails, setThumbnails] = useState([
    {
      imgUrl: {image1},
      title: "orealis",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1505689151358-52c00af435e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1929&q=80",
      title: "Vast Canyon",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
