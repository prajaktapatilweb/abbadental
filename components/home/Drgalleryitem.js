import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const Drgalleryitem = ({ item }) => {
    return (

        <Box sx={{
            borderRadius: 5,
        }}>
            <Image
                alt={'Clinic' + item.id}
                src={`/images/clinics1/clinic${item}.jpg`}
                width={100}
                height={100}
                style={{ borderRadius: 5 }}

                layout='responsive'></Image>

        </Box>

    );
};
export default Drgalleryitem;
