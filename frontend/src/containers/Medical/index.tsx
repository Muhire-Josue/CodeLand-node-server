import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import { InitialState } from 'src/types';
import getMedicalAction from 'src/store/actions/getMedical';
import Medical from 'src/components/Medical';

const typedUseSelectorHook: TypedUseSelectorHook<InitialState> = useSelector;

const MedicalContainer: React.FC = (): React.ReactElement | null => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const medicalState = typedUseSelectorHook(({ medical }) => medical);

  const getLoggedInUser = (): Record<string, string> => {
    try {
      const user = JSON.parse(localStorage.user);
      return user;
    } catch (error) {
      return {};
    }
  };
  useEffect(() => {
    const user = getLoggedInUser();
    if (user?.role) {
      dispatch(getMedicalAction(user.role));
    } else {
      navigate('/login');
    }
  }, []);

  return <Medical data={medicalState.data?.data || []} loading={medicalState.loading} />;
};

export default MedicalContainer;
