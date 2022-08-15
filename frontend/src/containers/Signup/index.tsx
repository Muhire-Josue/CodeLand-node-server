import React, { useState } from 'react';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { InitialState } from 'src/types';
import signupAction from 'src/store/actions/signup';
import Signup from 'src/components/Signup';

const typedUseSelectorHook: TypedUseSelectorHook<InitialState> = useSelector;

const SignupContainer: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Record<string, string>>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: '',
    country: '',
    gender: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: '',
    country: '',
    gender: '',
  });

  const { signup: signupState } = typedUseSelectorHook(({ user }) => user);

  const successCallback = () => {
    navigate('/login');
    setFormData({});
    setErrors({});
  };
  const errorCallback = () => undefined;

  const areInputsValid = (): boolean => {
    const inputErrors = {
      firstName: formData.firstName ? '' : 'first name is required',
      lastName: formData.lastName ? '' : 'last name is required',
      email: formData.email ? '' : 'email is required',
      password: formData.password ? '' : 'password is required',
      passwordConfirm:
        formData.password && formData.passwordConfirm === formData.password ? '' : "password doesn't match",
      role: formData.role ? '' : 'role is required',
      country: formData.country ? '' : 'country is required',
      gender: formData.gender ? '' : 'gender is required',
    } as Record<string, string>;

    setErrors(inputErrors);
    return !(Object.keys(inputErrors).filter((key: string) => inputErrors[key]).length > 0);
  };

  const handleSubmit = () => {
    if (!areInputsValid()) {
      return;
    }
    const payload = {
      ...formData,
    };
    delete payload.passwordConfirm;
    dispatch(signupAction(payload, successCallback, errorCallback));
  };

  return (
    <Signup
      formData={formData}
      setFormData={setFormData}
      errors={errors}
      setErrors={setErrors}
      signupState={signupState}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignupContainer;
