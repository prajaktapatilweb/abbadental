import React from 'react';
import Image from 'next/image';

const Drgalleryitem = ({ item }) => {
    return (

        <div
        style={{
          position: 'relative',
          display: 'inline-block',
          borderRadius: '15px', // Adjust as needed for rounded corners
          padding: '4px', // Adjust padding to control border thickness
          background: 'linear-gradient(280deg,#1799b3 20%,  #2b337d 80%)',
        }}
      >
        <div
          style={{
            background: 'white', // Background inside the gradient border
            borderRadius: '10px', // Inner div border-radius to match the gradient
            overflow: 'hidden', // Ensures the image stays within the rounded borders
          }}
        >
          <Image
            alt={'Clinic ' + item.id}
            src={`/images/clinics1/clinic${item}.jpg`}
            width={100}
            height={100}
            layout="responsive" // Responsive layout for the image
            className="item"
          />
        </div>
      </div>
      



    );
};
export default Drgalleryitem;
