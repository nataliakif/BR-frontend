import * as Yup from 'yup';

const titleRules = /\S\w/;
const authorRules =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const InputAddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'The title of the book is short.')
    .max(50, 'The title is too long.')
    .matches(titleRules, 'Cannot start with a space and hyphen')
    .required('Enter the title of the book.')
    .typeError('Enter the title of the book from 1 to 50 characters.'),
  author: Yup.string()
    .required('Enter the author of the book.')
    .matches(authorRules, 'Cannot start with a space and number')
    .min(2, "The author's name is short.")
    .max(50, "The author's name is too long.")
    .typeError('Enter the author of the book from 2 to 150 characters.'),
  publishYear: Yup.number()
    .integer('Enter an integer.')
    .min(1000, 'Are you reading the manuscript?')
    .max(2022, 'This book has not yet appeared.')
    .typeError('Enter the year of publication of the book from 1000 to 2022.'),
  pagesTotal: Yup.number('Enter a number')
    .integer('Enter an integer.')
    .min(1, 'The number of pages is more than 1.')
    .max(4, 'The number of pages is less than 4.')
    .required('Fill in the number of pages.')
    .typeError('Enter the number of pages from 1 to 4.'),
});

export default InputAddSchema;
