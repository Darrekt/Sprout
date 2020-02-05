import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import AcUnitIcon from '@material-ui/icons/AcUnit';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        minWidth: 150,
        maxWidth: 150,
        boxShadow: 'none'     
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const getElem = (icon: string) => {
    if (icon === 'Temperature')
        return <AcUnitIcon fontSize="large"/>
    else if (icon === 'Humidity')
        return <LocalDrinkIcon fontSize="large"/>
    else if (icon === 'Light')
        return <WbSunnyIcon fontSize="large"/>
}

const IconCard = (props: {icon: any, title: string}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                {getElem(props.icon)}
                <Typography variant="h6" component="h4">
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default IconCard