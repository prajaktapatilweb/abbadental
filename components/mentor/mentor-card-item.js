import React from 'react';
import Box from '@mui/material/Box';
const MentorCardItem = ({ item }) => {
  return (<Box>

    <section id="testimonials" class="testimonials">
      <div class="testimonial-item">
        <p>
          {item.description}
          <br></br>
        </p>
        <img src={item.photo} class="testimonial-img" alt="testimonial" />

        <h3>{item.name}</h3>
      </div>
    </section>
  </Box>);
};
export default MentorCardItem;
