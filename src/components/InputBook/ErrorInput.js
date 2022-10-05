import * as Yup from 'yup';

const titleRules = /^[^\s-]/;
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
      .min(1890, t('validation.yearMin'))
      .max(2022, t('validation.yearMax'))
      .typeError(t('validation.yearError')),
    pagesTotal: Yup.number()
      .min(1, t('validation.pagesMin'))
      .max(2000, t('validation.pagesMax'))
      .required(t('validation.pagesFill'))
      .typeError(t('validation.pagesError')),
  });

  return InputAddSchema;
};

export default schema;
