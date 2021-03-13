import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Regis_form = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div className="main_regis">
        <div className="inner_regis">
          <form className={classes.root} noValidate autoComplete="off">
          
            {/* <TextField id="standard-basic" label="Standard" /> */}
            <TextField id="filled-basic" label="Filled" variant="filled" />
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Regis_form;
