import { useForm } from 'react-hook-form';
import { signUpThunk } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuthToken } from '../../redux/auth/authSelectors';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const navigate = useNavigate();

  const {
    onBlur,
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(signUpThunk(data));

    if (token) navigate('/home');
    reset();
  };

  return (
    <div className="form-sign-up-container">
      <form
        className="flex flex-col w-[335px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="form-title">Sign Up</h1>
        <div className="input-container">
          <input
            className="input-form"
            onBlur={onBlur}
            type="text"
            placeholder="Name"
            autoComplete="off"
            {...register('name', {
              required: { value: true, message: 'This is an ERROR name' },
              min: 2,
              maxLength: 20,
              pattern:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
            })}
          />

          <input
            className="input-form"
            onBlur={onBlur}
            type="text"
            placeholder="dd/mm/yyyy"
            autoComplete="off"
            {...register('dateOfBirth', {
              required: {
                value: true,
                message: 'This is an ERROR date of birth',
              },
              min: 0,
              pattern:
                '/^(0[1-9]|[1-2][0-9]|3[0-1])(\\/|-)(0[1-9]|1[0-2])(\\/|-)d{4}$/i',
            })}
          />
          <input
            className="input-form"
            onBlur={onBlur}
            type="email"
            placeholder="Email"
            autoComplete="off"
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'This is an ERROR email.',
              },
            })}
          />
          {}

          {/* {errors.email?.message && (
            <span className=" text-error-color ml-[24px] text-sm">
              Password is required.
            </span>
          )} */}

          <input
            className="input-form"
            onBlur={onBlur}
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
              },
            })}
          />

          {/* {errors.password && (
            <>
              {errors.password.type === 'required' && (
                <span className=" text-error-color ml-[24px] text-sm">
                  Password is required.
                </span>
              )}
              {errors.password.type === 'minLength' && (
                <span className=" ml-[24px] text-sm">
                  Password must be at least 6 characters long.
                </span>
              )}
            </>
          )} */}
        </div>
        <div className="btn-container">
          <button className="sign-btn" type="submit">
            Sign Up
          </button>
          <Link className="sign-link-btn" to="/signin">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
