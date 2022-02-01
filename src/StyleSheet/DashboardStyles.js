import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  topHeader: {
    background: "#49d893",
  },
  sidebarBox: {
    background: "#49d893",
    minHeight: "100% !important",
    overflow: "hidden !important",
  },
  sidebarBoxMenuItem: {
    color: "#23303f !important",
    border: "2px solid #fff !important",
    borderBottomLeftRadius: "50px !important",
    borderTopLeftRadius: "50px !important",
    marginBottom: "0.5rem !important",
    borderRight: "none !important",
    background: "#fff !important",
    fontSize: "1rem",
    boxSizing: "border-box",
    paddingLeft: "2rem !important",
    // marginLeft: "10px !important",
    transition: "all 0.4s linear",
    "&:hover": {
      background: "#e83a3b !important",
      color: "#FFFFFF !important",
    },
  },
  headerHomeButton: {
    background: "#FFFFFF !important",
    color: "#23303f !important",
    padding: "0.6rem 3rem !important",
    fontSize: "1rem !important",
    border: "2px solid #FFFFFF !important",
    transition: "all 0.4s linear !important",
    "&:hover": {
      background: "#e83a3b !important",
      color: "#FFFFFF !important",
    },
  },

  // Calender Component Styles_______
  calendarBox: {
    background: "#49d893",
    padding: "1rem 0 !important",
    display: "flex",
    justifyContent: "center",
  },
  calendarChildBox: {
    maxWidth: "fit-content",
    margin: "auto 0",
  },
  calendar: {
    maxWidth: "320px !important",
  },
  createWorkSubmitButton: {
    background: "#49d893 !important",
    padding: "0.8rem 2rem !important",
    marginTop: "1rem !important",
  },
});
