import { Container, Typography, Button } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useAuth from '../../../hooks/useAuth'
import { useHistory } from 'react-router';



const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Review = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [text, setText] = React.useState('')
    const { user } = useAuth();
    const history=useHistory()

    // get review text
    const handleOnBlur = e => {
        const reviewText = e.target.value;
        setText(reviewText)
    }

    // post review data to db
    const handleReviewData = e => {
        const reviewInfo = {
            rating: value,
            reviewText: text,
            user: user.displayName,
            email: user.email
        }
        fetch('https://arcane-meadow-17287.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thank you for your feedback.')
                    setText('')
                    history.push('/dashboard')
                }
            })
            e.preventDefault()
    }


    return (
        <Container>
            <Typography variant='h4' sx={{ textAlign: 'left' }}>
                Review us
            </Typography>
            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
            <form onSubmit={handleReviewData}>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    onBlur={handleOnBlur}
                    placeholder="say something about us"
                    style={{ width: '100%' }}
                />
                <Button type='submit' variant='contained' sx={{ textAlign: 'center' }}>post review</Button>
            </form>
        </Container>
    );
};

export default Review;