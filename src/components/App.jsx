import { Chart } from './Chart/Chart';
import { useState } from 'react';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const books = [
  {
    id: 'u9kgwNWGi3uUUwh0b8V49',
    title: 'Eloquent JavaScript, Third Edition',
    author: 'Marijn Haverbeke',
    year: '2014',
    pages: '350',
    rating: '3',
    status: 'Already read',
    readStatistics: [],
  },
  {
    id: 'YxhM4QDxPeA3SmPHcEZPJ',
    title: 'Practical Modern JavaScript',
    author: 'Nicolas Bevacqua',
    year: '1985',
    pages: '128',
    rating: '2',
    status: 'Reading now',
    readStatistics: [
      { dateTime: '10.09.22', pageAmount: 10 },
      { dateTime: '11.09.22', pageAmount: 11 },
      { dateTime: '12.09.22', pageAmount: 8 },
      { dateTime: '13.09.22', pageAmount: 7 },
    ],
  },
  {
    id: 'ck89qe3HriUDHe09TBoJ8',
    title: 'Speaking about JavaScript',
    author: 'Axel Rahmayer',
    year: '2011',
    pages: '204',
    rating: '43',
    status: 'Going to read',
    readStatistics: [
      { dateTime: '10.09.22', pageAmount: 10 },
      { dateTime: '11.09.22', pageAmount: 11 },
      { dateTime: '12.09.22', pageAmount: 8 },
      { dateTime: '13.09.22', pageAmount: 7 },
    ],
  },
];

const calculateStatistics = books => {
  const readingStatistics = books
    .map(book => book.readStatistics)
    .map(item => item.flatMap(item => item))
    .flatMap(item => item);
  const uniqueDatesOfReading = [
    ...new Set(
      books
        .map(book => book.readStatistics)
        .map(item => item.flatMap(item => item.dateTime))
        .flatMap(item => item)
    ),
  ];

  const result = uniqueDatesOfReading.map(date => {
    return {
      date: date,
      pageAmount: readingStatistics
        .filter(stat => stat.dateTime === date)
        .reduce(
          (totalSum, stat) => (totalSum += Number.parseInt(stat.pageAmount)),
          0
        ),
    };
  });
  return result;
};

export const App = () => {
  const [state, setState] = useState([...books]);

  const trainingDaysAmount = 30;

  const totalTrainingAmount = state.reduce((currentValue, book) => {
    return (currentValue += Number.parseInt(book.pages));
  }, 0);

  const goalPerDay = Math.round(totalTrainingAmount / trainingDaysAmount);

  const handleChange = event => {
    const prevState = [...state];
    prevState.find(({ id }) => event.target.name === id).checked =
      event.target.checked;
    setState([...prevState]);
  };

  const checkedBooks = state.filter(book => book.checked === true);

  return (
    <>
      {/*   <Header /> */}

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">
          Current training from 15.09.22 till 15.10.22 ({trainingDaysAmount}{' '}
          days) Total pages in this training: {totalTrainingAmount} Your daily
          goal = {goalPerDay} pages/day
        </FormLabel>
        <FormGroup>
          {state.map(book => {
            return (
              <FormControlLabel
                key={book.id}
                control={
                  <Checkbox
                    checked={book.checked ?? false}
                    onChange={handleChange}
                    name={book.id}
                  />
                }
                label={book.title + ' size:' + book.pages + ' pages'}
              />
            );
          })}
        </FormGroup>
      </FormControl>

      <Chart
        plan={goalPerDay}
        readingStatistics={calculateStatistics(
          checkedBooks.length > 0 ? checkedBooks : state
        )}
      />
    </>
  );
};
