import * as React from 'react';
import { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useRouter } from 'next/navigation'


export default function ImagePalette({items}) {
  return (
    <ImageList variant="masonry" cols={2} gap={8}>
      {items.map((item) => (
        <ImageItem item={item}/>
      ))}
    </ImageList>
  );
}

function ImageItem({item}) { 
    const [isHovering, setIsHovering] = useState(false);
    const router = useRouter()
    return (
      <ImageListItem key={item.img} onClick={() => router.push(`/blog/${item.id}`)}>
      <img
        src={item.poster}
        alt={item.title}
        loading="lazy"
        onMouseOver={event => {setIsHovering(true)}}
        onMouseOut={event => {setIsHovering(false)}}
      />
      {isHovering &&
      <ImageListItemBar
        id = {item.title}
        title={item.title}
        subtitle={<span>{item.date}</span>}
        sx={{
          "& .MuiImageListItemBar-title": { fontSize: '14px' },
          "& .MuiImageListItemBar-subtitle": { fontSize: '10px' },
        }}
      />
      }
     
    </ImageListItem>
    )
}