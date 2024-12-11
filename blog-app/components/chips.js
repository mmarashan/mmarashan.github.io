import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function TagsChips({tags}) {
  return (
    <Stack direction="row" spacing={1}>
      {
        tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" variant="outlined"/>
        ))
      }
    </Stack>
  );
}