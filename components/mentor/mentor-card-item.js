import React from 'react';
import { motion} from "framer-motion";


const MentorCardItem = ({ item }) => {
   // Define the fade-up animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 100 },  // Initial state: invisible and below the viewport
  visible: { 
    opacity: 1, 
    y: 0,  // Moves up to its original position
    transition: {
      duration: 0.8, // Duration of the animation
      ease: 'easeInOut', // Easing function
    },
  },
};
  return (

              <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>
    <section id="testimonials" class="testimonials">

      <div class="testimonial-item">
        <p>
          {item.description}
          <br></br>
        </p>
        <img src={item.photo} class="testimonial-img" alt="testimonial"  />

        <h3>{item.name}</h3>
      </div>
    </section>
    </motion.div>
  );
};
export default MentorCardItem;
