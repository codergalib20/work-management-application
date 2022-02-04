import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import backgroundImage from "../../assets/doTheTask.jpg";
export default function Home() {
  const useStyles = makeStyles({
    mainBackground: {
      background: `url(${backgroundImage}) no-repeat center center`,
      backgroundSize: "cover",
      minHeight: "90vh",
    },
  });
  const { mainBackground } = useStyles();
  return <Box className={mainBackground}></Box>;
}
