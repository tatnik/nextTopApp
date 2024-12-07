'use client';
import { useEffect, useState } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import StarIcon from '../../public/star.svg';

export const Rating = (props: RatingProps): JSX.Element => {
  const { isEditable = false, rating, setRating, children, className, ...rest } = props;
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <span
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClick(i + 1)}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(evt: React.KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(i + 1, evt)
          }
        />
      </span>
    ));

    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, evt: React.KeyboardEvent<SVGElement>) => {
    if (evt.code != 'Space' || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...rest}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
