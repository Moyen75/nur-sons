import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import userImg from '../../../images/user.jpg'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://arcane-meadow-17287.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container sx={{ m: 5 }}>
            <Typography variant='h4' sx={{ m: 3 }}>
                Customer's Feedback
            </Typography>
            <Grid container spacing={2}>
                {
                    reviews?.map(review => <Grid item xs={12} md={3}
                        key={review._id}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={userImg}
                            alt="green iguana"
                        />
                        <Typography variant='h5'>
                            {review.user}
                        </Typography>
                        <Rating name="read-only" value={review.rating} readOnly />
                        <Typography>
                            {review.reviewText}
                        </Typography>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;