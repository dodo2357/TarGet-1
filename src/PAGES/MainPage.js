import React from 'react';
import '../Styles/layout1.css';
import TAppBar from '../COMPONENTS/AppBar';
import Slideshow from '../COMPONENTS/Slider';

import { makeStyles } from '@material-ui/core';


import slide1 from '../DATA/IMAGES/Biber.jpg';
import slide2 from '../DATA/IMAGES/Domates.jpg';
import slide3 from '../DATA/IMAGES/Hıyar.jpg';

import { data } from '../DATA/data.jsx';
import TextGrid from '../COMPONENTS/textGrid';
import { Typography } from '@material-ui/core';


function MainPage() {

    // functions that may included will be written here


    const useStyles = makeStyles((theme) => ({
        root: {
            ...theme.typography.button,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1),
        },
    }));


    const classes = useStyles();
    return (

        < >
            <div class="layout1-flex">

                <TAppBar />

                <div class="flex-row">

                    <img src={slide1} class='sliderimg'></img>
                    <img src={slide2} class='sliderimg'></img>
                    <img src={slide3} class='sliderimg'></img>


                </div>
                <div className={classes.root} >
                    <Typography>Bu haftanın ürünleri</Typography>
                </div>
                <div class="flex-row-wrapped">
                    {data.map(data =>
                        <TextGrid
                            img={data.img}
                            text0={data.name}
                            text1={data.description}
                            text2={data.quantity}
                            text3={data.price}
                        />

                    )}

                </div>


                <div class="footer">

                    <div >
                        <h1>c1</h1>
                        <h1>asdasd</h1>
                        <h1>asdasd</h1>

                    </div>

                    <div >
                        <h1>c2</h1>
                        <h1>asdasd</h1>

                    </div>

                    <div >
                        <h1>c3</h1>
                    </div>

                </div>


            </div >

        </>

    );


}


export default MainPage;