export type LoginFormModel = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type SignUpFormModel = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};
