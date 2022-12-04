import React from 'react'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Apple from './paddy.jpg';
import { useNavigate } from "react-router-dom";
import './Product.css'



const Product = (props) => {
    const navigate=useNavigate(false);
    let imageUrl=""
    if(props.pname==='Apple'){
      imageUrl="./pimages/apple.jpg"
    }
    else if(props.pname==='Moong Dal'){
        imageUrl="./pimages/moong.jpg"
    }
    else if(props.pname==='Oranges'){
        imageUrl="./pimages/orange.jpg"
    }
    else if(props.pname==='Pomegranate'){
        imageUrl="./pimages/promo.jpg"
    }
    else if(props.pname==='Grapes'){
        imageUrl="./pimages/grapes.jpg"
    }
    else if(props.pname==='WaterMelon'){
        imageUrl="./pimages/watermelon.jpeg"
    }
    else if(props.pname==='StrawBerry'){
        imageUrl="./pimages/strawberry.jpeg"
    }
    else if(props.pname==='Banana'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='Mango'){
        imageUrl="./pimages/mango.jpg"
    }
    else if(props.pname==='BlackGram'){
        imageUrl="./pimages/blackgram.jpeg"
    }
    else if(props.pname==='BengalGram'){
        imageUrl="./pimages/bengal.jpg"
    }
    else if(props.pname==='Green Pegion Peas'){
        imageUrl="./pimages/greenpegionpeas.jpeg"
    }
    else if(props.pname==='KulthiDal'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='ChickPeas'){
        imageUrl="./pimages/chole.jpg"
    }
    else if(props.pname==='RedLentils'){
        imageUrl="./pimages/redlentils.jpg"
    }
    else if(props.pname==='Tur Dal'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='BuckWheat'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='Paddy'){
        imageUrl="./pimages/paddy.jpg"
    }
    else if(props.pname==='Millet'){
        imageUrl="./pimages/millet.jpg"
    }
    else if(props.pname==='OatMeal'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='PopCorn Seeds'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='BrownRice'){
        imageUrl="./pimages/brownrice.jpg"
    }
    else if(props.pname==='Bulgur'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='Barley'){
        imageUrl="./pimages/barley.jpg"
    }
    else if(props.pname==='LadyFinger'){
        imageUrl="./pimages/ladyfinger.jpg"
    }
    else if(props.pname==='GreenPeas'){
        imageUrl="./pimages/greenpeas.jpeg"
    }
    else if(props.pname==='Ridge Gourd'){
        imageUrl="./pimages/ridge.jpg"
    }
    else if(props.pname==='Radish'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='Potato'){
        imageUrl="./pimages/potato.jpg"
    }
    else if(props.pname==='CauliFlower'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='Cabbage'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='saldas'){
        imageUrl="./pimages/unknown.jpg"
    }
    else if(props.pname==='Crab'){
        imageUrl="./pimages/crab.jpg"
    }
    else if(props.pname==='Fish'){
        imageUrl="./pimages/fish.jpg"
    }
    else if(props.pname==='Prawns'){
        imageUrl="./pimages/prawns.jpeg"
    }
    else if(props.pname==='Pomfret'){
        imageUrl="./pimages/pomfret.jpg"
    }
    else if(props.pname==='Tomato'){
        imageUrl="./pimages/tomato.jpg"
    }
    return (

        <div class="flip-card">
  <div class="flip-card-inner">
  <Card sx={{ width:210, height: 350 }} elevation={10} className="flip-card-front">
            <CardActionArea>
                <center>
                                            {/* <CardMedia
                                            component="img"
                                            height="auto"
                                            image={imageUrl}
                                            alt=""
                                            sx={{ width: 210, height:180}} />  */}
                    <img src={imageUrl} alt={props.name} style={{width:210,height:180}}/>
                    
                </center>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.pname}
                    </Typography>
                    <p>quantity(in KGs): {props.quantity}</p>
                    <p>price per Kg: ₹{props.price}</p>
                    <p>deliver status: {props.deliverable}</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ width:210, height: 350 }} elevation={10} className="flip-card-back">
            <CardActionArea>
                <CardContent>
                    <p><b>Farmer:</b> {props.fname}</p>
                    <br/>
                    <p><b>Address:</b> {props.address}</p>
                    <br/>
                    <p><b>Phone Number:</b> {props.phone}</p>
                    <br/>
                    <p><b>Description:</b> {props.des}</p>
                </CardContent>
            </CardActionArea>
        </Card>
  </div>
</div>

    )
}

export default Product