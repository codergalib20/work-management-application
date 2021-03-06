import { makeStyles } from "@mui/styles";
import backImage from "../assets/illustration-1.png";
export const usePageStyles = makeStyles({
  // Home Page for Banner Component________
  banner: {
    padding: "2rem 0",
    backgroundSize: "contain",
    "@media (min-width: 701px)": {
      background: `url(${backImage}) no-repeat right center`,
    },
    "@media (max-width: 700px)": {
      background: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0 ,0.6)), url(${backImage}) no-repeat right center`,
    },
  },
  bannerContainer: {
    height: "100vh",
    maxHeight: "500px",
    display: "flex !important",
    alignItems: "center",
    "& h2": {
      fontSize: "70px",
      "@media (max-width: 700px)": {
        fontSize: "40px",
        color: "#FE6B8B",
      },
    },
  },
  // Login and Register pages styles
  mainForm: {
    padding: "1rem",
    minHeight: "300px",
    "& span": {
      display: "block",
      marginBottom: "1rem",
      color: "#e83a3b",
    },
  },
  loginRegisterTextField: {
    marginTop: "1rem !important",
  },
  // Our Work Component Styles__________________
  ourWorkCard: {
    background: "#0a1929 !important",
    padding: "1rem",
    "& h4": {
      color: "#fff",
      textAlign: "center",
      fontWeight: 300,
    },
    "& p": {
      color: "#fff",
      textAlign: "center",
      fontWeight: 300,
    },
  },
  // My Work DetailWork pages Button Component Style_____________
  DetailWorkButtonsCard: {
    padding: "1rem",
    marginBottom: "0.5rem",
    cursor: "pointer",
    "& h6": {
      color: "#23303f",
    },
  },
  // My Work DetailWork pages Links Component Style_____________
  linksComponentBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "380px",
  },
  // My Work DetailWork pages SubmitTaskDialog Component Style_____________
  formTextField:{
    margin: "10px 0"
  },
  // Global Style Button===================================
  singleWorkCardButton: {
    background: "#49d893 !important",
    fontWeight: 600,
    padding: "9px 35px !important",
    "&:hover": {
      background: "#e83a3b !important",
      color: "#fff",
    },
  },
});
