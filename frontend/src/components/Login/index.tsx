/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { State } from 'src/types';
import './styles.scss';

type Props = {
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
  errors: Record<string, string>;
  setErrors: (data: Record<string, string>) => void;
  loginState: State;
  handleSubmit: () => void;
};

const Login: React.FC<Props> = ({
  formData,
  setFormData,
  errors,
  setErrors,
  loginState,
  handleSubmit,
}): React.ReactElement => {
  const onInputChange = (e: any) => {
    const { value, name } = e.target;
    setErrors({ ...errors, [name]: '' });
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="Login">
      <div className="container">
        <div id="login-form">
          <h3 className="text-center">Login</h3>
          <br />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa fa-envelope" aria-hidden="true" style={{ fontSize: '12px' }}>
                  {' '}
                </i>
              </div>
              <input type="email" id="email" name="email" placeholder="Email" className="" onChange={onInputChange} />
            </div>
            <div className="">
              <small id="email-error" className="text-danger">
                {errors.email}
              </small>
            </div>
          </div>
          <div className="form-group mt-4">
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa fa-lock" aria-hidden="true" />{' '}
              </div>
              <input type="password" id="password" name="password" placeholder="Password" onChange={onInputChange} />
            </div>
            <div className="">
              <small id="password-error" className="text-danger">
                {errors.password}
              </small>
            </div>
          </div>
          <button
            type="submit"
            className="btn submit-btn"
            onClick={loginState.loading ? undefined : handleSubmit}
            disabled={loginState.loading}
          >
            {loginState.loading ? 'Loading...' : 'Submit'}
          </button>
          {loginState.error ? (
            <div className="alert alert-danger mt-4 text-center" role="alert">
              {loginState.error?.error || loginState.error?.message}
            </div>
          ) : null}
          {loginState.data?.message && !loginState.error ? (
            <div className="alert alert-success mt-4 text-center" role="alert">
              {loginState.data.message}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Login;
