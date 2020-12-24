import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GenericTemplate from '../templates/GenericTemplate';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));


const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <GenericTemplate title="トップページ">
            <>トップページ</>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" value="今回はいろんなテキストフォームを入れてみた" />
                <TextField id="filled-basic" label="Filled" variant="filled" value="material-uiを使えば簡単に入れられる" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value="value属性にハードコーディングしてるので変更はできない" />
            </form>
        </GenericTemplate>
    );
};

export default HomePage;