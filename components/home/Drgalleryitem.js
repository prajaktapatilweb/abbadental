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
          backgroundImage: 'linear-gradient(to right, #305b9f 10%, #469ce2 90%)',
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
            alt='Abbad Dental Clinic and Implant Centre, 2-3, Jubiliant Heights near Nirman House, Vidya Vikas Circle, towards College Rd, Nashik, Maharashtra 422005 Reception Image'
            src={`/images/nashikclinic/clinics${item}.jpg`}
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
