import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles({
    header: {
        background: '#111111'
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <Typography component='h2'>Code For interview</Typography>
                <Typography component='h2'>All users</Typography>
                <Typography component='h2'>Add users</Typography>
            </Toolbar>
        </AppBar>

    )


}

export default NavBar;