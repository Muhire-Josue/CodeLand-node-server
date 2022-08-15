/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { State } from 'src/types';
import countries from '../../utils/countries';
import './styles.scss';

type Props = {
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
  errors: Record<string, string>;
  setErrors: (data: Record<string, string>) => void;
  signupState: State;
  handleSubmit: () => void;
};

const Signup: React.FC<Props> = ({
  formData,
  setFormData,
  errors,
  setErrors,
  signupState,
  handleSubmit,
}): React.ReactElement => {
  const onInputChange = (e: any) => {
    const { value, name } = e.target;
    setErrors({ ...errors, [name]: '' });
    setFormData({ ...formData, [name]: value });
  };

  const onSelect = (name: string, value: string) => {
    setErrors({ ...errors, [name]: '' });
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="Signup">
      <div className="container">
        <div id="signup-form">
          <h3 className="text-center">Sign up</h3>
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
          <div className="form-group mt-4">
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa fa-lock" aria-hidden="true" />{' '}
              </div>
              <input
                type="password"
                id="password-confirm"
                name="passwordConfirm"
                placeholder="Re-type Password"
                onChange={onInputChange}
              />
            </div>
            <div className="">
              <small id="password-confirm-error" className="text-danger">
                {errors.passwordConfirm}
              </small>
            </div>
          </div>
          <div className="row mt-0">
            <div className="col">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-user" aria-hidden="true" />{' '}
                  </div>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First Name"
                    onChange={onInputChange}
                  />
                </div>
                <div className="">
                  <small id="first-name-error" className="text-danger">
                    {errors.firstName}
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-user" aria-hidden="true" />{' '}
                  </div>
                  <input type="text" id="last-name" name="lastName" placeholder="Last Name" onChange={onInputChange} />
                </div>
                <div className="">
                  <small id="last-name-error" className="text-danger">
                    {errors.lastName}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3">
            <span className="mr-4">
              <input type="radio" id="male" name="gender" value="male" onChange={onInputChange} />{' '}
              <label htmlFor="male">Male</label>
            </span>
            <span>
              <input type="radio" id="female" name="gender" value="female" onChange={onInputChange} />{' '}
              <label htmlFor="female">Female</label>
            </span>
            <div className="">
              <small id="gender-error" className="text-danger">
                {errors.gender}
              </small>
            </div>
          </div>
          <div className="mb-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle btn-block text-left"
                type="button"
                id="rolesDropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {formData.role || 'Select a role'}
              </button>
              <div className="dropdown-menu" aria-labelledby="rolesDropdownMenuButton">
                {['patient', 'physician', 'pharmacist', 'admin'].map((role) => (
                  <a key={role} className="dropdown-item" href="#" onClick={() => onSelect('role', role)}>
                    {role}
                  </a>
                ))}
              </div>
            </div>
            <div className="">
              <small id="country-error" className="text-danger">
                {errors.country}
              </small>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle btn-block text-left"
              type="button"
              id="countryDropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {formData.country || 'Select a country'}
            </button>
            <div className="dropdown-menu" aria-labelledby="countryDropdownMenuButton">
              {countries.map((country) => (
                <a
                  key={country.name}
                  className="dropdown-item"
                  href="#"
                  onClick={() => onSelect('country', country.name)}
                >
                  {country.name}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <small id="country-error" className="text-danger">
              {errors.country}
            </small>
          </div>
          <br />

          <input type="checkbox" id="terms-and-conditions" name="terms-and-conditions" value="" />
          <label htmlFor="terms-and-conditions">&nbsp;I agree with terms and conditions</label>
          <br />
          <input type="checkbox" id="newsletter" name="newsletter" value="" />
          <label htmlFor="newsletter">&nbsp;I want to receive the newsletter</label>
          <br />

          <button
            type="submit"
            className="btn submit-btn"
            onClick={signupState.loading ? undefined : handleSubmit}
            disabled={signupState.loading}
          >
            {signupState.loading ? 'Loading...' : 'Register'}
          </button>
          {signupState.error ? (
            <div className="alert alert-danger mt-4 text-center" role="alert">
              {signupState.error?.error || signupState.error?.message}
            </div>
          ) : null}
          {signupState.data?.message && !signupState.error ? (
            <div className="alert alert-success mt-4 text-center" role="alert">
              {signupState.data.message}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Signup;
