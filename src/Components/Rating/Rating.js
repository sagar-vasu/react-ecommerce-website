import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function RatingSize(props) {
  return (
    <div>
      <Rating name="size-medium" value={props.val} />
    </div>
  );
}