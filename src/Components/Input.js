import React, {forwardRef} from "react";
import TextField from "@material-ui/core/TextField"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(1)
    }
}))


export const Input = forwardRef((props, ref) => {
    return (<TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        {...props}
    />
    )
});