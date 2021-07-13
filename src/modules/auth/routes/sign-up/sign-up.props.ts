import { Credentials } from '@auth/models';
import { useAuthStore } from '@auth/hooks';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  password: ''
};

/**
 * <SignUp /> props
 */
const useSignUpProps = () => {
  const { store } = useAuthStore();

  const form = useFormik({
    initialValues,

    onSubmit: (values, { setSubmitting }) => {
      store.login(values);

      setSubmitting(false);
    }
  });

  return {
    form
  };
};

export { useSignUpProps };
