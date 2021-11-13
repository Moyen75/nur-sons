import { Avatar, Container, Grid, Paper, Typography } from '@mui/material';
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
                <hr style={{ width: '300px', textAlign: 'center' }} />
                What Clients Say
            </Typography>
            <Typography>
                We’ve put together a bonus resource sharing the best customer testimonial emails we’ve seen.
            </Typography>
            <hr style={{ width: '300px', textAlign: 'center', mb: 4 }} />
            <Grid container spacing={2} sx={{mt:3,mb:3}}>
                {
                    reviews?.map(review => <Grid item xs={12} md={3}
                        key={review._id}
                    >
                        <Paper>
                            <Avatar alt="Remy Sharp" src={userImg} />
                            <Typography variant='h5'>
                                {review.user}
                            </Typography>
                            <Rating name="read-only" value={review.rating} readOnly />
                            <Typography>
                                {review.reviewText}
                            </Typography>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;