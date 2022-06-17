import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** New permission */
  addPermission?: Maybe<ResultPermission>;
  /** Delete permission */
  deletePermission?: Maybe<ResultPermission>;
  /** Delete user */
  deleteUser?: Maybe<ResultUser>;
  /** Login user */
  login?: Maybe<ResultLogin>;
  /** register users */
  register?: Maybe<ResultUser>;
  /** Update permission */
  updatePermission?: Maybe<ResultPermission>;
  /** Update user */
  updateUser?: Maybe<ResultUser>;
};

export type MutationAddPermissionArgs = {
  permission: PermissionInput;
};

export type MutationDeletePermissionArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationRegisterArgs = {
  user: UserInput;
};

export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  permission: PermissionInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user: UserInput;
};

/** Type of object to make permission requests. */
export type Permission = {
  __typename?: 'Permission';
  /** Permit authorization */
  authorization: Scalars['Boolean'];
  /** Permission date */
  date: Scalars['String'];
  /** From what time */
  from: Scalars['String'];
  /** Unique identifier */
  id: Scalars['ID'];
  /** Reason for permission */
  reason: Scalars['String'];
  /** Until what time? */
  to: Scalars['String'];
  /** Permit type */
  type: TypePermission;
  /** Requesting user */
  user: Scalars['ID'];
};

/** Input for the registration of user data */
export type PermissionInput = {
  /** Permit authorization */
  authorization: Scalars['Boolean'];
  /** From what time */
  from: Scalars['String'];
  /** Unique identifier */
  id?: InputMaybe<Scalars['ID']>;
  /** Reason for permission */
  reason: Scalars['String'];
  /** Until what time? */
  to: Scalars['String'];
  /** Permit type */
  type?: InputMaybe<TypePermission>;
  /** Requesting user */
  user?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  /** Token Authentication */
  me?: Maybe<ResultUser>;
  /** Show item permission */
  permission?: Maybe<ResultPermission>;
  /** Show list of permissions */
  permissions?: Maybe<ResultPermissions>;
  /** List of registered users */
  users?: Maybe<ResultUsers>;
};

export type QueryPermissionArgs = {
  id: Scalars['ID'];
};

export type QueryPermissionsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryUsersArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** Interface to specify the required properties in the response */
export type Result = {
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultInfo = {
  __typename?: 'ResultInfo';
  /** Number of documents per page */
  itemsPage: Scalars['Int'];
  /** Selected page */
  page: Scalars['Int'];
  /** Pages containing the result */
  pages: Scalars['Int'];
  /** Total number of documents corresponding to the collection */
  total: Scalars['Int'];
};

export type ResultLogin = Result & {
  __typename?: 'ResultLogin';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Logged user token information */
  token?: Maybe<Scalars['String']>;
  /** User */
  user?: Maybe<User>;
};

export type ResultPermission = Result & {
  __typename?: 'ResultPermission';
  /** Operation message */
  message: Scalars['String'];
  /** Permission */
  permission?: Maybe<Permission>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultPermissions = Result & {
  __typename?: 'ResultPermissions';
  /** Paging system information */
  info?: Maybe<ResultInfo>;
  /** Operation message */
  message: Scalars['String'];
  /** List of permissions */
  permissions?: Maybe<Array<Permission>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultUser = Result & {
  __typename?: 'ResultUser';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of registered users */
  user?: Maybe<User>;
};

export type ResultUsers = Result & {
  __typename?: 'ResultUsers';
  /** Paging system information */
  info?: Maybe<ResultInfo>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of registered users */
  users: Array<User>;
};

/** User types */
export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

/** Permission types */
export enum TypePermission {
  Ausencia = 'AUSENCIA',
  CambioTurno = 'CAMBIO_TURNO',
  Falta = 'FALTA',
  LlegarTarde = 'LLEGAR_TARDE',
  Retirarse = 'RETIRARSE',
}

/**
 * User details.
 * Dates in ISO format.
 */
export type User = {
  __typename?: 'User';
  /** User information */
  birthday: Scalars['String'];
  /** Account data */
  email: Scalars['String'];
  /** Unique identifier */
  id: Scalars['ID'];
  /** Last user session */
  lastSession: Scalars['String'];
  lastname: Scalars['String'];
  /** Username */
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  /** Registration date in the app */
  registerDate: Scalars['String'];
  /** User permissions */
  role: Role;
};

/** Input for the registration of user data */
export type UserInput = {
  /** User information */
  birthday: Scalars['String'];
  /** Account data */
  email: Scalars['String'];
  /** Unique identifier */
  id?: InputMaybe<Scalars['ID']>;
  lastname: Scalars['String'];
  /** Username */
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** User permissions */
  role?: InputMaybe<Role>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: 'Query';
  users?: {
    __typename?: 'ResultUsers';
    status: boolean;
    message: string;
    users: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      lastname: string;
      email: string;
      password: string;
      birthday: string;
      phone?: string | null;
      registerDate: string;
      role: Role;
      lastSession: string;
    }>;
  } | null;
};

export type PermissionsQueryVariables = Exact<{ [key: string]: never }>;

export type PermissionsQuery = {
  __typename?: 'Query';
  permissions?: {
    __typename?: 'ResultPermissions';
    status: boolean;
    message: string;
    permissions?: Array<{
      __typename?: 'Permission';
      id: string;
      type: TypePermission;
      reason: string;
      user: string;
      date: string;
      from: string;
      to: string;
      authorization: boolean;
    }> | null;
  } | null;
};

export const UsersDocument = gql`
  query users {
    users {
      status
      message
      users {
        id
        name
        lastname
        email
        password
        birthday
        phone
        registerDate
        role
        lastSession
      }
    }
  }
`;

export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const PermissionsDocument = gql`
  query permissions {
    permissions {
      status
      message
      permissions {
        id
        type
        reason
        user
        date
        from
        to
        authorization
      }
    }
  }
`;

export function usePermissionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PermissionsQuery,
    PermissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PermissionsQuery, PermissionsQueryVariables>(
    PermissionsDocument,
    options
  );
}
export function usePermissionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PermissionsQuery,
    PermissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PermissionsQuery, PermissionsQueryVariables>(
    PermissionsDocument,
    options
  );
}
export type PermissionsQueryHookResult = ReturnType<typeof usePermissionsQuery>;
export type PermissionsLazyQueryHookResult = ReturnType<
  typeof usePermissionsLazyQuery
>;
export type PermissionsQueryResult = Apollo.QueryResult<
  PermissionsQuery,
  PermissionsQueryVariables
>;
