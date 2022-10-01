import * as Yup from 'yup';

const InputAddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'The title of the book is short.')
    .max(150, 'The title is too long.')
    .required('Enter the title of the book.')
    .typeError('Enter the title of the book from 2 to 150 characters.'),
  author: Yup.string()
    .min(2, "The author's name is short.")
    .max(150, "The author's name is too long.")
    .typeError('Enter the author of the book from 2 to 150 characters.'),
  year: Yup.number()
    .integer('Enter an integer.')
    .min(1000, 'Are you reading the manuscript?')
    .max(2021, 'This book has not yet appeared.')
    .typeError('Enter the year of publication of the book from 1000 to 2021.'),
  pages: Yup.number('Enter a number')
    .integer('Enter an integer.')
    .positive('The number of pages is more than 1.')
    .min(1, 'The number of pages is more than 1.')
    .max(99999, 'The number of pages is less than 99999.')
    .required('Fill in the number of pages.')
    .typeError('Enter the number of pages from 1 to 99999.'),
});

export default InputAddSchema;
