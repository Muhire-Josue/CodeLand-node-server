import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import { InitialState } from 'src/types';
import loginAction from 'src/store/actions/login';
import Login from 'src/components/Login';

const typedUseSelectorHook: TypedUseSelectorHook<InitialState> = useSelector;

const LoginContainer: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Record<string, string>>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    email: '',
    password: '',
  });

  const { login: loginState } = typedUseSelectorHook(({ user }) => user);

  const successCallback = (res: any) => {
    localStorage.user = JSON.stringify(res.data);
    navigate('/medical');
    setFormData({});
    setErrors({});
  };
  const errorCallback = () => undefined;

  const areInputsValid = (): boolean => {
    const inputErrors = {
      email: formData.email ? '' : 'email is required',
      password: formData.password ? '' : 'password is required',
    } as Record<string, string>;

    setErrors(inputErrors);
    return !(Object.keys(inputErrors).filter((key: string) => inputErrors[key]).length > 0);
  };

  const handleSubmit = () => {
    if (!areInputsValid()) {
      return;
    }
    dispatch(loginAction(formData, successCallback, errorCallback));
  };

  return (
    <Login
      formData={formData}
      setFormData={setFormData}
      errors={errors}
      setErrors={setErrors}
      loginState={loginState}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
