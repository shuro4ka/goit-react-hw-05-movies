import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'service/api';


const Reviews = props => {
    const { movieId } = useParams();
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        getMovieById(movieId, false, true).then(data => {
            setReviewsData(data.results);
        });
    }, [movieId]);

    return (
        <div>
            {reviewsData.length > 0 ? (
                <ul>
                    {reviewsData.map(review => {
                        return (
                            <li key={review.id}>
                                <h4>{review.author}</h4>
                                <p>{review.content}</p>
                            </li>
                        );
                    })}
                </ul>
                ) : (
                    <h3>Reviews are not found</h3>
            )}
        </div>
    );
};

export default Reviews;