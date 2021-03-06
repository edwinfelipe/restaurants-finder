import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    padding: "12px 16px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& span": {
      fontSize: "12px",
      fontWeight: "bold",
      color: "#aaa",
    },
  },
  middle: {
    paddingLeft: "16px",
    flexGrow: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    margin: "0",
    paddingTop: "4px",
  },
  picture: {
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  stateLabel: {
    fontSize: "12px",
    fontWeight: "bold",
    paddingTop: "4px",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
