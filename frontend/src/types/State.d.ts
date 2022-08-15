interface State {
  error: any;
  loading: boolean;
  message: string;
  data: any;
  meta?: Record<string, string | number>;
  success: boolean;
}

export default State;
