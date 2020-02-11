import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        minWidth: 150,
        maxWidth: 150        
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


const ProductCard = (props: {icon: any, title: string, marketing: string}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h4">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.marketing}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ProductCard