export interface CredentialResponseCredentialProps{
  credential:string
}

export interface CredentialDataProps  {
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
