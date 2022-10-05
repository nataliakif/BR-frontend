import * as Yup from 'yup';

const titleRules = /\S\w/;
const authorRules =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = t => {
  const InputAddSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, t('validation.bookTitle'))
      .max(50, t('validation.titleMax'))
      .matches(titleRules, t('validation.titleSpace'))
      .required(t('validation.enterTitle'))
      .typeError(t('validation.titleError')),
    author: Yup.string()
      .required(t('validation.enterAuthor'))
      .matches(authorRules, t('validation.authorSpace'))
      .min(2, t('validation.authorMin'))
      .max(50, t('validation.authorMax'))
      .typeError(t('validation.authorCharacters')),
    publishYear: Yup.number()
      .integer(t('validation.enterYear'))
      .min(1000, t('validation.yearMin'))
      .max(2023, t('validation.yearMax'))
      .typeError(t('validation.yearError')),
    pagesTotal: Yup.number(t('validation.pagesNumber'))
      .integer(t('validation.enterYear'))
      .min(1, t('validation.pagesMin'))
      .max(99999, t('validation.pagesMax'))
      .required(t('validation.pagesFill'))
      .typeError(t('validation.pagesError')),
  });

  return InputAddSchema;
};

export default schema;
