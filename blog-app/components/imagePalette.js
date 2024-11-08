import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import $ from 'jquery';

export default function ImagePalette({items}) {
  return (
    <ImageList variant="masonry" cols={2} gap={8}>
      {items.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.poster}
            alt={item.title}
            loading="lazy"
            onMouseOver={event => {onMouseOver(event, item.title)}}
            onMouseOut={event => {onMouseOut(event, item.title)}}
          />
          
          <ImageListItemBar
            id = {item.title}
            title={item.title}
            subtitle={<span>{item.date}</span>}
            // position="below"
          />
         
        </ImageListItem>
      ))}
    </ImageList>
  );
}

function onMouseOver(e, itemId){
    console.log("onMouseOut "+ itemId);
    return false;
}

function onMouseOut(e, itemId){
    console.log("onMouseOut "+ itemId);
    return false;
}