import { useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import SectionTitle from "../SectionTitle";
import emailjs from "@emailjs/browser";

//form validation via yup
const contactSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  message: yup.string().required("required"),
});

//intital values for forom
const initialValuesContact = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

//Form Component for Contact
const Contact = () => {
  //initial values
  const form = useRef();
  const { palette } = useTheme(); //grab the palette from the theme used
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();

  //set toast message states and
  const [toastState, setToastState] = useState({
    openFailed: false,
    openSuccess: false,
  });

  const { openFailed, openSuccess } = toastState;

  //For Snackbar component. Close toast message when click away
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToastState({ openFailed: false, openSuccess: false });
  };

  const handleFormSubmit = (e) => {
    //e.preventDefault();

    emailjs
      .sendForm(
        "service_jcsj1hh",
        "template_2hthhz5",
        form.current,
        "R0-HGpcetIa1x21La"
      )
      .then(
        (result) => {
          console.log(result.text);
          setToastState({ open: true, openFailed: false, openSuccess: true });
        },
        (error) => {
          console.log(error.text);
          setToastState({ open: true, openFailed: true, openSuccess: false });
        }
      );
  };

  return (
    <div id="contact">
      <SectionTitle title="CONTACT" />
      <Box
        width={isNonMobile ? "30%" : "90%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        //backgroundColor={"#0f1624"}
        sx={{
          background:
            "linear-gradient(to left top, #0c0218, #13061f, #190a26, #1e0d2d, #250e33, #2f113f, #3a144b, #461757, #581f6e, #6a2785, #7d309e, #9039b7)",
        }}
        position={"relative"}
        boxShadow="0px 0px 8px rgb(255,255,255)"
      >
        <Typography fontWeight="500" variant="h3" sx={{ mb: "1.5rem" }}>
          Contact Me
        </Typography>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesContact}
          validationSchema={contactSchema}
          isInitialValid={false}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
            isValid,
          }) => (
            <form ref={form} onSubmit={handleSubmit}>
              {/*For the sx, anything below a div,  */}
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <>
                  {/*larger screens, have a span of 2 */}
                  <TextField
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={
                      Boolean(touched.firstName) && Boolean(errors.firstName)
                    }
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={
                      Boolean(touched.lastName) && Boolean(errors.lastName)
                    }
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2" }}
                  />
                </>

                <TextField
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                  name="message"
                  error={Boolean(touched.message) && Boolean(errors.message)}
                  rows={4}
                  multiline
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
              </Box>

              {/* BUTTONS */}
              <Box>
                <Button
                  disabled={!isValid}
                  fullWidth
                  type="submit"
                  sx={{
                    m: "2rem 0",
                    p: "1rem",
                    //background: 'linear-gradient(to right, #d41aa4, #c9209e, #be2498, #b32892, #a92a8c, #a12887, #992782, #91257d, #891f78, #811973, #7a136e, #720c69)',
                    //backgroundColor: palette.primary.pink,
                    background: 'linear-gradient(to right, #d41aa4, #c9209e, #be2498, #b32892, #a92a8c, #a12887, #992782, #91257d, #891f78, #811973, #7a136e, #720c69)',

                    color: palette.background.alt,
                    "&:hover": { color: palette.primary.pink },
                  }}
                >
                  {"Submit"}
                  {console.log("isvalid is: " + isValid)}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        {/*Snackbar component only allows 1 alert component. Need 2 of them */}
        <Snackbar
          open={openSuccess}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Email sent! Thanks for reaching out!
          </Alert>
        </Snackbar>

        <Snackbar
          open={openFailed}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Email failed to send!
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};

export default Contact;
