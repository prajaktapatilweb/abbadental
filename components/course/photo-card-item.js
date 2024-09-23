import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const PhotoCardItem = ({ item }) => {
  return (
    <Box sx={{
      // px: 1,
      // py: 1,
      pb:5
    }}>
      <Box sx={{p: 1,}}>
        <Box>
         
          <Image
            alt={'Course ' + item.id}
            src={`/images/patients/patients${item}.jpg`}
            width={100}
            height={100}
            layout='responsive'
            style={{borderRadius:5,border:'3px solid #2b337d',}}
            ></Image>
       

         
        </Box>
       
      </Box>
    </Box>);
};
export default PhotoCardItem;
