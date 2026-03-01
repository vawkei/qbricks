export interface UserProps {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
  confirmedPassword?: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  isSuccess: boolean;
  message: string;
  user: null;
}

export interface CredentialResponseCredentialProps {
  credential: string;
}

export interface CredentialDataProps {
  credential?: string;
  clientId?: string;
  select_by?: string;
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  nbf: number;
  jti: string;
  [key: string]: any; // Allows extra properties so typescript wont give an error
}

export interface TestProps {
  id: number;
  subject?: string;
  title: string;
  isLocked: boolean;
}

// export type TestProps = {
//   id: number;
//   subject?: string;
//   title: string;
//   isLocked: boolean;
// };


export interface QuestionProp  {
  id: number;
  section: string;
  instructionId: string | null;
  passageId: string | null;
  question: string;
  options: string[];
  answer: string;
};

export interface SectionStats  {
  [sectionName: string]: {
    total: number;
    correct: number;
  };
};

export interface ResultDetails {
    questionId: number;
    section: string;
    selectedAnswer: string | null;
    correctAnswer: string;
    isCorrect: boolean;
  };