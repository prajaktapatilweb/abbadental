import React from 'react';
import { Typography, Card, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Axios from 'axios';
import { Field, Form, Formik,ErrorMessage } from 'formik';
import * as yup from 'yup';
import AppTextField from '../Formik/AppTextField';
import { Button, FormControl, Grid, InputLabel } from '@mui/material';
import CustomizedSelectFormik from '../Formik/CustomizedSelectFormik';
import { useRouter } from 'next/router';
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from "@mui/material/IconButton";
import GoogleRecaptcha from '../GoogleRecaptcha';


const All = [
  { key: 1, text: 'Braces/ aligners', value: 'Braces/ aligners' },
  { key: 2, text: 'Dental implants', value: 'Dental implants' },
  { key: 3, text: 'Dental veneers (smile designing)', value: 'Dental veneers (smile designing)' },
  { key: 4, text: 'Full mouth rehabilitation', value: 'Full mouth rehabilitation' },
  { key: 5, text: 'Pediatric (kids dentistry)', value: 'Pediatric (kids dentistry)' },
  { key: 6, text: 'Root canal', value: 'Root canal' },
  { key: 7, text: 'Wisdom teeth extraction/ Teeth extraction', value: 'Wisdom teeth extraction/ Teeth extraction' },
  { key: 8, text: 'Other', value: 'Other' }
];
const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email ID'),
    // .required('Email ID is required'),
  mobilenumber: yup
    .string()
    .required('Mobile Number is mandatory')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
  selection: yup
    .string(),
    // .required('It is required'),
    recaptcha: yup
    .string()
    .required('It is required'),
});

const Contact = () => {

  const contactno1 = "+919833389890";
  const contactno2 = "+919702955057";

  const router = useRouter()
  const onSubmit = async (values, submitProps) => {
    console.log({ values })
    Axios.post("/api/nodemail", {
      // Axios.post("/api/sendemail", {
      name: values.name,
      email: values.email,
      mobileno: values.mobilenumber,
      msg: values.msg,
      selection: values.selection

    })
      .then(function (response) {
        //handle success
        // console.log('Success')
        router.push('/thankyou')
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      })
      .catch(function (response) {
        // handle error
        console.log('Rrtt', response)
        alert("Error in submission. Please resubmit");
      });
  };

  return (
    <Box id='contactform' sx={{ backgroundColor: '#f3fbfd' }}>
      <Container >
        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" class="contact">
          <div class="container">

            <div class="section-title">
              <h2>Contact</h2>
            </div>

          </div>


          <Grid container spacing={2}>

                <Grid item xs={12} md={3}>
                  <div class="info-box" style={{ background: '#ffffff' }}>

                    <i class="bx"><LocationOnIcon /></i>
                    <h3 style={{fontSize:'18px'}}> Airoli</h3>
                    <p>R.No. B-001, Plot No. A-6/2, Suvarna Dham Bldg, Sector 9, Near HDFC Bank, Airoli, Navi Mumbai - 400 708.</p>
                 
                 
                    {/* <i class="bx"><EmailTwoToneIcon style={{ color: '#49caeb' }}></EmailTwoToneIcon></i> */}
                    <h3>Working Hours </h3>
                    <p> Monday to Saturday:<br/>
                   11:00 AM – 03:00 PM<br/>
06:00 PM – 10:00 PM</p>

<p>Sunday<br/>
12:00 PM – 03:00 <br/>PM(By Appointment Only)</p>
<Link  href={`tel:${contactno1}`} target="_blank">
                                    +919833389890
                                </Link>{" "}
                 
                  </div>
                </Grid>
              
            <Grid item xs={12} md={3} sx={{display:'flex'}}>
                  <div class="info-box" style={{ background: '#ffffff' }}>

                    <i class="bx"><LocationOnIcon /></i>
                    <h3 style={{fontSize:'18px'}}> Thane</h3>
                    <p>Shop No.1, Ground Floor, New Sahjeevan Society, near Panchganga, 2nd Rabodi, Thane West, Thane 400601.
</p>
<h3>Working Hours</h3>
                    <p>Monday to Sunday:<br/>
10:00 AM – 02:00 PM<br/>
05:00 PM – 10:00 PM</p>
                  
                 
                    {/* <h3>Contact Us</h3> */}
                    
                                
                                <Link href={`tel:${contactno2}`} target="_blank">
                                        +919702955057
                                </Link>
                               <br/>
                  </div>
                </Grid>
            <Grid item xs={12} md={6} sx={{display:'flex'}}>
              <Card sx={{ px: 3, py: 4 }}>
                <Formik
                  validateOnChange={true}
                  initialValues={{
                    name: '',
                    email: '',
                    mobilenumber: '',
                    msg: '',
                    selection: '',
                    recaptcha:''
                  }}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({ initialValues, values, errors, isSubmitting }) => (
                    <Form style={{ textAlign: 'left' }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <AppTextField
                            placeholder='name'
                            name='name'
                            label='Name'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <AppTextField
                            placeholder='Email'
                            name='email'
                            label='Email ID'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <AppTextField
                            placeholder='Mobile Number'
                            name='mobilenumber'
                            label='Mobile Number'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormControl
                            sx={{
                              width: '100%',
                              // mt: 2,
                              '&.MuiInputBase-input': { fontSize: 14 },
                            }}
                          >
                            <InputLabel id='demo-simple-select-label'>
                              Select your interest
                            </InputLabel>
                            <Field
                              name='selection'
                              as='select'
                              options={All}
                              component={CustomizedSelectFormik}
                            ></Field>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} >
                          <Box>
                            <AppTextField
                              placeholder='Message'
                              name='msg'
                              label='Message'
                              sx={{
                                width: '100%',
                                '& .MuiInputBase-input': {
                                  fontSize: 14,
                                },
                              }}
                              variant='outlined'
                              multiline
                              rows='4'
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: { xs: 3, lg: 3 } }}>
                          <GoogleRecaptcha />
                          <ErrorMessage name="recaptcha" component="div" style={{ color: 'red' }} />

                        </Grid>
                      </Grid>
                      {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
                      {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}

                      <div>
                        <Button
                          variant='contained'
                          color='primary'
                          disabled={isSubmitting}
                          sx={{
                            // fontWeight: Fonts.REGULAR,
                            textTransform: 'capitalize',
                            fontSize: 16,
                            minWidth: 160,
                          }}
                          type='submit'
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Grid>
          {/* </Grid> */}
          </Grid>

        </section>
        {/* <!-- End Contact Section --> */}
      </Container>
    </Box>
  );
};
export default Contact;
