import {useState} from 'react';
import Rating from '@mui/material/Rating';

const RatingControlled = ({step}) => {
  const [value, setValue] = useState(null);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      size="small"
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log(newValue);
      }}
      precision={step}
    />
  );
};

export default RatingControlled;

