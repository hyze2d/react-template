import { Credentials } from '@auth/models';
import { useAuthStore } from '@auth/hooks';
import { useFormik } from 'formik';

const initialValues = {
  email: '',
  password: ''
};

/**
 * <SignIn /> props
 */
const useSignInProps = () => {
  const { store } = useAuthStore();

  const form = useFormik<Credentials>({
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

export { useSignInProps };
