import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddressNumber = {
  __typename?: 'AddressNumber';
  exterior?: Maybe<Scalars['String']>;
  interior?: Maybe<Scalars['String']>;
};

export type AddressNumberInput = {
  exterior: Scalars['String'];
  interior?: InputMaybe<Scalars['String']>;
};

export type AddressStreets = {
  __typename?: 'AddressStreets';
  a?: Maybe<Scalars['String']>;
  b?: Maybe<Scalars['String']>;
};

export type AddressStreetsInput = {
  a?: InputMaybe<Scalars['String']>;
  b?: InputMaybe<Scalars['String']>;
};

/** Interface to specify the required properties in the response */
export type Contact = {
  /** Contact status */
  attended: Scalars['Boolean'];
  /** Item details */
  details: Details;
  /** Contact email */
  email: Scalars['String'];
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
};

/** Contact input for vacancies or sales */
export type ContactInput = {
  /** Contact age */
  age?: InputMaybe<Scalars['String']>;
  /** If the contact was answered */
  attended?: InputMaybe<Scalars['Boolean']>;
  /** Contact company */
  company?: InputMaybe<Scalars['String']>;
  /** Contact email */
  email: Scalars['String'];
  /** Contact message */
  message?: InputMaybe<Scalars['String']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
  /** Unique identifier of a vacancy */
  vacantId?: InputMaybe<Scalars['ID']>;
  /** Contact work position */
  workPosition?: InputMaybe<WorkPosition>;
};

export type ContactPersonalized = {
  __typename?: 'ContactPersonalized';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type ContactPersonalizedInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

/** Type of object to contact the company. */
export type ContactRrhh = Contact & {
  __typename?: 'ContactRrhh';
  /** Contact age */
  age?: Maybe<Scalars['String']>;
  /** Contact status */
  attended: Scalars['Boolean'];
  /** Item details */
  details: Details;
  /** Contact email */
  email: Scalars['String'];
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
  /** Unique identifier of a vacancy */
  vacantId?: Maybe<Vacant>;
};

export type ContactSales = Contact & {
  __typename?: 'ContactSales';
  /** Contact status */
  attended: Scalars['Boolean'];
  /** Contact company */
  company?: Maybe<Scalars['String']>;
  /** Item details */
  details: Details;
  /** Contact email */
  email: Scalars['String'];
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Contact message */
  message?: Maybe<Scalars['String']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
  /** Contact work position */
  workPosition?: Maybe<WorkPosition>;
};

export type Details = {
  __typename?: 'Details';
  /** Creation date */
  creationDate?: Maybe<Scalars['String']>;
  /** Creator user of item */
  creatorUserId?: Maybe<User>;
  /** Last modification */
  lastModification?: Maybe<Scalars['String']>;
  /** Last modification */
  modifierUserId?: Maybe<User>;
  /** Availability */
  status?: Maybe<Scalars['Boolean']>;
};

export type Job = {
  __typename?: 'Job';
  /** Job description */
  description?: Maybe<Scalars['String']>;
  /** Item details */
  details: Details;
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Job image */
  image?: Maybe<Scalars['String']>;
  /** Job title */
  title: Scalars['String'];
};

/** Job input */
export type JobInput = {
  /** Job description */
  description: Scalars['String'];
  /** Job image */
  image: Scalars['String'];
  /** Job title */
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** New contact */
  addContact?: Maybe<ResultContact>;
  /** New job */
  addJob?: Maybe<ResultJob>;
  /** New permission */
  addPermission?: Maybe<ResultPermission>;
  /** New product */
  addProduct?: Maybe<PurchaseProductResult>;
  /** New requisition */
  addRequisition?: Maybe<PurchaseRequisitionResult>;
  /** New supplier */
  addSupplier?: Maybe<PurchaseSupplierResult>;
  /** New vacant */
  addVacant?: Maybe<ResultVacant>;
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

export type MutationAddContactArgs = {
  contact: ContactInput;
};

export type MutationAddJobArgs = {
  job: JobInput;
};

export type MutationAddPermissionArgs = {
  permission: PermissionInput;
};

export type MutationAddProductArgs = {
  product: PurchaseProductInput;
};

export type MutationAddRequisitionArgs = {
  requisition: PurchaseRequisitionInput;
};

export type MutationAddSupplierArgs = {
  supplier: PurchaseSupplierInput;
};

export type MutationAddVacantArgs = {
  vacant: VacantInput;
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
  /** Item details */
  details: Details;
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
  userId: User;
};

/** Input for the registration of user data */
export type PermissionInput = {
  /** Permit authorization */
  authorization?: InputMaybe<Scalars['Boolean']>;
  /** From what time */
  from: Scalars['String'];
  /** Reason for permission */
  reason: Scalars['String'];
  /** Until what time? */
  to: Scalars['String'];
  /** Permit type */
  type: TypePermission;
  /** Requesting user */
  userId: Scalars['ID'];
};

export type ProductTypeService = {
  __typename?: 'ProductTypeService';
  description?: Maybe<Scalars['String']>;
  type?: Maybe<ProductTypeServiceEnum>;
};

export enum ProductTypeServiceEnum {
  Carga = 'CARGA',
  Financiero = 'FINANCIERO',
  Tecnologico = 'TECNOLOGICO',
  Transporte = 'TRANSPORTE',
}

export type ProductTypeServiceInput = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ProductTypeServiceEnum>;
};

export type PurchaseProduct = PurchaseProductInterface & {
  __typename?: 'PurchaseProduct';
  audited: Scalars['Boolean'];
  brand?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details: Details;
  id: Scalars['ID'];
  name: Scalars['String'];
  supplierId: PurchaseSupplier;
};

export type PurchaseProductInput = {
  audited: Scalars['Boolean'];
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['String'];
  typeService?: InputMaybe<ProductTypeServiceInput>;
};

export type PurchaseProductInterface = {
  audited: Scalars['Boolean'];
  brand?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details: Details;
  id: Scalars['ID'];
  name: Scalars['String'];
  supplierId: PurchaseSupplier;
};

export type PurchaseProductResult = Result & {
  __typename?: 'PurchaseProductResult';
  /** Operation message */
  message: Scalars['String'];
  /** Contact */
  product?: Maybe<PurchaseProductInterface>;
  /** List of contacts */
  products?: Maybe<Array<PurchaseProductInterface>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseProductService = PurchaseProductInterface & {
  __typename?: 'PurchaseProductService';
  audited: Scalars['Boolean'];
  brand?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details: Details;
  id: Scalars['ID'];
  name: Scalars['String'];
  supplierId: PurchaseSupplier;
  typeService?: Maybe<ProductTypeService>;
};

export type PurchaseRequisition = {
  __typename?: 'PurchaseRequisition';
  amountOf?: Maybe<RequisitionAmountOf>;
  autorization?: Maybe<Scalars['Boolean']>;
  details?: Maybe<Details>;
  id: Scalars['ID'];
  productId?: Maybe<Array<Maybe<PurchaseProduct>>>;
  userId?: Maybe<User>;
};

export type PurchaseRequisitionInput = {
  amountOf: RequisitionAmountOfInput;
  autorization?: InputMaybe<Scalars['Boolean']>;
  productId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userId: Scalars['String'];
};

export type PurchaseRequisitionResult = Result & {
  __typename?: 'PurchaseRequisitionResult';
  /** Operation message */
  message: Scalars['String'];
  /** Contact */
  requisition?: Maybe<PurchaseRequisition>;
  /** List of contacts */
  requisitions?: Maybe<Array<PurchaseRequisition>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseSupplier = {
  __typename?: 'PurchaseSupplier';
  address?: Maybe<SupplierAddress>;
  classification?: Maybe<SupplierClassificationEnum>;
  deliveryTime?: Maybe<Scalars['Int']>;
  details?: Maybe<Details>;
  id: Scalars['ID'];
  infoContact?: Maybe<SupplierContact>;
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  passed?: Maybe<Scalars['Boolean']>;
  productId?: Maybe<Array<Maybe<PurchaseProductInterface>>>;
  taxes?: Maybe<SupplierTaxes>;
};

export type PurchaseSupplierInput = {
  address: SupplierAddressInput;
  classification: SupplierClassificationEnum;
  deliveryTime?: InputMaybe<Scalars['Int']>;
  infoContact: SupplierContactInput;
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  passed: Scalars['Boolean'];
  taxes: SupplierTaxesInput;
};

export type PurchaseSupplierResult = Result & {
  __typename?: 'PurchaseSupplierResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Contact */
  supplier?: Maybe<PurchaseSupplier>;
  /** List of contacts */
  suppliers?: Maybe<Array<PurchaseSupplier>>;
};

export type Query = {
  __typename?: 'Query';
  /** Show item contact */
  contact?: Maybe<ResultContact>;
  /** Show list of contacts */
  contacts?: Maybe<ResultContact>;
  /** Show item job */
  job?: Maybe<ResultJob>;
  /** Show list of job */
  jobs?: Maybe<ResultJob>;
  /** Token Authentication */
  me?: Maybe<ResultUser>;
  /** Show item permission */
  permission?: Maybe<ResultPermission>;
  /** Show list of permissions */
  permissions?: Maybe<ResultPermission>;
  /** Show item product */
  product?: Maybe<PurchaseProductResult>;
  /** Show list of products */
  products?: Maybe<PurchaseProductResult>;
  /** Show item requisition */
  requisition?: Maybe<PurchaseRequisitionResult>;
  /** Show list of suppliers */
  requisitions?: Maybe<PurchaseRequisitionResult>;
  /** Show item supplier */
  supplier?: Maybe<PurchaseSupplierResult>;
  /** Show list of suppliers */
  suppliers?: Maybe<PurchaseSupplierResult>;
  /** List of registered users */
  users?: Maybe<ResultUser>;
  /** Show item vacant */
  vacant?: Maybe<ResultVacant>;
  /** Show list of vacants */
  vacants?: Maybe<ResultVacant>;
};

export type QueryContactArgs = {
  id: Scalars['ID'];
};

export type QueryContactsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryJobArgs = {
  id: Scalars['ID'];
};

export type QueryJobsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryPermissionArgs = {
  id: Scalars['ID'];
};

export type QueryPermissionsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type QueryProductsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryRequisitionArgs = {
  id: Scalars['ID'];
};

export type QueryRequisitionsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QuerySupplierArgs = {
  id: Scalars['ID'];
};

export type QuerySuppliersArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryUsersArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryVacantArgs = {
  id: Scalars['ID'];
};

export type QueryVacantsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type RequisitionAmountOf = {
  __typename?: 'RequisitionAmountOf';
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<RequisitionAmountOfEnum>;
};

export enum RequisitionAmountOfEnum {
  Kg = 'KG',
  Lts = 'LTS',
  Pz = 'PZ',
}

export type RequisitionAmountOfInput = {
  number: Scalars['Int'];
  type: RequisitionAmountOfEnum;
};

/** Interface to specify the required properties in the response */
export type Result = {
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultContact = Result & {
  __typename?: 'ResultContact';
  /** Contact */
  contact?: Maybe<Contact>;
  /** List of contacts */
  contacts?: Maybe<Array<Contact>>;
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

export type ResultJob = Result & {
  __typename?: 'ResultJob';
  /** Job */
  job?: Maybe<Job>;
  /** List of jobs */
  jobs?: Maybe<Array<Job>>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultLogin = Result & {
  __typename?: 'ResultLogin';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Logged user token information */
  token?: Maybe<Scalars['String']>;
};

export type ResultPermission = Result & {
  __typename?: 'ResultPermission';
  /** Operation message */
  message: Scalars['String'];
  /** Permission */
  permission?: Maybe<Permission>;
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
  /** List of registered users */
  users?: Maybe<Array<User>>;
};

export type ResultVacant = Result & {
  __typename?: 'ResultVacant';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Vacant */
  vacant?: Maybe<Vacant>;
  /** List of Vacants */
  vacants?: Maybe<Array<Vacant>>;
};

/** User types */
export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

export type SupplierAddress = {
  __typename?: 'SupplierAddress';
  colony?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  municipality?: Maybe<Scalars['String']>;
  number?: Maybe<AddressNumber>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  streets?: Maybe<AddressStreets>;
  zipCode?: Maybe<Scalars['String']>;
};

export type SupplierAddressInput = {
  colony: Scalars['String'];
  country: Scalars['String'];
  municipality: Scalars['String'];
  number: AddressNumberInput;
  state: Scalars['String'];
  street: Scalars['String'];
  streets?: InputMaybe<AddressStreetsInput>;
  zipCode: Scalars['String'];
};

export enum SupplierClassificationEnum {
  A = 'A',
  B = 'B',
  C = 'C',
}

export type SupplierContact = {
  __typename?: 'SupplierContact';
  email?: Maybe<Scalars['String']>;
  personalizedContact?: Maybe<ContactPersonalized>;
  phone?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type SupplierContactInput = {
  email: Scalars['String'];
  personalizedContact?: InputMaybe<ContactPersonalizedInput>;
  phone: Scalars['String'];
  web?: InputMaybe<Scalars['String']>;
};

export type SupplierTaxes = {
  __typename?: 'SupplierTaxes';
  rfc?: Maybe<Scalars['String']>;
  type?: Maybe<SupplierTypeTaxesEnum>;
};

export type SupplierTaxesInput = {
  rfc?: InputMaybe<Scalars['String']>;
  type: SupplierTypeTaxesEnum;
};

export enum SupplierTypeTaxesEnum {
  Directo = 'DIRECTO',
  Indirecto = 'INDIRECTO',
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
  /** Item details */
  details: Details;
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
  /** User permissions */
  role: Role;
};

/** Input for the registration of user data */
export type UserInput = {
  /** User information */
  birthday: Scalars['String'];
  /** Account data */
  email: Scalars['String'];
  lastname: Scalars['String'];
  /** Username */
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** User permissions */
  role?: InputMaybe<Role>;
};

/** Type of object to vacants. */
export type Vacant = {
  __typename?: 'Vacant';
  /** Vacant available */
  available: Scalars['Boolean'];
  /** Vacant name */
  description: Scalars['String'];
  /** Item details */
  details: Details;
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Unique identifier of a Job */
  jobId: Job;
  /** Vacant name */
  title: Scalars['String'];
};

/** Vacant input */
export type VacantInput = {
  /** Vacant available */
  available?: InputMaybe<Scalars['Boolean']>;
  /** Vacant description */
  description: Scalars['String'];
  /** Unique identifier of a Job */
  jobId: Scalars['String'];
  /** Vacant title */
  title: Scalars['String'];
};

/** Purpose of contact */
export enum WorkPosition {
  Compras = 'COMPRAS',
  Desarrollador = 'DESARROLLADOR',
  Gerente = 'GERENTE',
  Mercadotecnia = 'MERCADOTECNIA',
  Otros = 'OTROS',
  RecursosHumanos = 'RECURSOS_HUMANOS',
  Sistemas = 'SISTEMAS',
  Ventas = 'VENTAS',
}

export type PurchaseSupplierFragmentFragment = {
  __typename?: 'PurchaseSupplier';
  id: string;
  name: string;
  logo?: string | null;
  deliveryTime?: number | null;
  passed?: boolean | null;
  classification?: SupplierClassificationEnum | null;
  infoContact?: {
    __typename?: 'SupplierContact';
    email?: string | null;
    phone?: string | null;
    web?: string | null;
    personalizedContact?: {
      __typename?: 'ContactPersonalized';
      name?: string | null;
      email?: string | null;
      phone?: string | null;
    } | null;
  } | null;
  address?: {
    __typename?: 'SupplierAddress';
    street?: string | null;
    colony?: string | null;
    municipality?: string | null;
    state?: string | null;
    country?: string | null;
    zipCode?: string | null;
    number?: {
      __typename?: 'AddressNumber';
      interior?: string | null;
      exterior?: string | null;
    } | null;
    streets?: {
      __typename?: 'AddressStreets';
      a?: string | null;
      b?: string | null;
    } | null;
  } | null;
  taxes?: {
    __typename?: 'SupplierTaxes';
    type?: SupplierTypeTaxesEnum | null;
    rfc?: string | null;
  } | null;
  productId?: Array<
    | {
        __typename?: 'PurchaseProduct';
        id: string;
        name: string;
        description?: string | null;
        brand?: string | null;
        audited: boolean;
        supplierId: { __typename?: 'PurchaseSupplier'; name: string };
        details: { __typename?: 'Details'; status?: boolean | null };
      }
    | {
        __typename?: 'PurchaseProductService';
        id: string;
        name: string;
        description?: string | null;
        brand?: string | null;
        audited: boolean;
        typeService?: {
          __typename?: 'ProductTypeService';
          type?: ProductTypeServiceEnum | null;
          description?: string | null;
        } | null;
        supplierId: { __typename?: 'PurchaseSupplier'; name: string };
        details: { __typename?: 'Details'; status?: boolean | null };
      }
    | null
  > | null;
  details?: {
    __typename?: 'Details';
    status?: boolean | null;
    creationDate?: string | null;
    creatorUserId?: { __typename?: 'User'; name: string } | null;
  } | null;
};

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type UserLoginMutation = {
  __typename?: 'Mutation';
  login?: {
    __typename?: 'ResultLogin';
    status: boolean;
    message: string;
    token?: string | null;
  } | null;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  users?: {
    __typename?: 'ResultUser';
    status: boolean;
    message: string;
    users?: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      lastname: string;
      email: string;
      password: string;
      birthday: string;
      phone?: string | null;
      role: Role;
      lastSession: string;
    }> | null;
  } | null;
};

export type GetPurchaseSuppliersQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetPurchaseSuppliersQuery = {
  __typename?: 'Query';
  suppliers?: {
    __typename?: 'PurchaseSupplierResult';
    status: boolean;
    message: string;
    suppliers?: Array<{
      __typename?: 'PurchaseSupplier';
      id: string;
      name: string;
      logo?: string | null;
      deliveryTime?: number | null;
      passed?: boolean | null;
      classification?: SupplierClassificationEnum | null;
      infoContact?: {
        __typename?: 'SupplierContact';
        email?: string | null;
        phone?: string | null;
        web?: string | null;
        personalizedContact?: {
          __typename?: 'ContactPersonalized';
          name?: string | null;
          email?: string | null;
          phone?: string | null;
        } | null;
      } | null;
      address?: {
        __typename?: 'SupplierAddress';
        street?: string | null;
        colony?: string | null;
        municipality?: string | null;
        state?: string | null;
        country?: string | null;
        zipCode?: string | null;
        number?: {
          __typename?: 'AddressNumber';
          interior?: string | null;
          exterior?: string | null;
        } | null;
        streets?: {
          __typename?: 'AddressStreets';
          a?: string | null;
          b?: string | null;
        } | null;
      } | null;
      taxes?: {
        __typename?: 'SupplierTaxes';
        type?: SupplierTypeTaxesEnum | null;
        rfc?: string | null;
      } | null;
      productId?: Array<
        | {
            __typename?: 'PurchaseProduct';
            id: string;
            name: string;
            description?: string | null;
            brand?: string | null;
            audited: boolean;
            supplierId: { __typename?: 'PurchaseSupplier'; name: string };
            details: { __typename?: 'Details'; status?: boolean | null };
          }
        | {
            __typename?: 'PurchaseProductService';
            id: string;
            name: string;
            description?: string | null;
            brand?: string | null;
            audited: boolean;
            typeService?: {
              __typename?: 'ProductTypeService';
              type?: ProductTypeServiceEnum | null;
              description?: string | null;
            } | null;
            supplierId: { __typename?: 'PurchaseSupplier'; name: string };
            details: { __typename?: 'Details'; status?: boolean | null };
          }
        | null
      > | null;
      details?: {
        __typename?: 'Details';
        status?: boolean | null;
        creationDate?: string | null;
        creatorUserId?: { __typename?: 'User'; name: string } | null;
      } | null;
    }> | null;
  } | null;
};

export type GetPurchaseProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPurchaseProductsQuery = {
  __typename?: 'Query';
  products?: {
    __typename?: 'PurchaseProductResult';
    status: boolean;
    message: string;
    products?: Array<
      | {
          __typename?: 'PurchaseProduct';
          id: string;
          name: string;
          description?: string | null;
          brand?: string | null;
          audited: boolean;
          typeService?: ProductTypeService;
          supplierId: { __typename?: 'PurchaseSupplier'; name: string };
          details: { __typename?: 'Details'; status?: boolean | null };
        }
      | {
          __typename?: 'PurchaseProductService';
          id: string;
          name: string;
          description?: string | null;
          brand?: string | null;
          audited: boolean;
          typeService?: {
            __typename?: 'ProductTypeService';
            type?: ProductTypeServiceEnum | null;
            description?: string | null;
          } | null;
          supplierId: { __typename?: 'PurchaseSupplier'; name: string };
          details: { __typename?: 'Details'; status?: boolean | null };
        }
    > | null;
  } | null;
};

export type GetSupplierQueryVariables = Exact<{
  supplierId: Scalars['ID'];
}>;

export type GetSupplierQuery = {
  __typename?: 'Query';
  supplier?: {
    __typename?: 'PurchaseSupplierResult';
    status: boolean;
    message: string;
    supplier?: {
      __typename?: 'PurchaseSupplier';
      id: string;
      name: string;
      logo?: string | null;
      deliveryTime?: number | null;
      passed?: boolean | null;
      classification?: SupplierClassificationEnum | null;
      infoContact?: {
        __typename?: 'SupplierContact';
        email?: string | null;
        phone?: string | null;
        web?: string | null;
        personalizedContact?: {
          __typename?: 'ContactPersonalized';
          name?: string | null;
          email?: string | null;
          phone?: string | null;
        } | null;
      } | null;
      address?: {
        __typename?: 'SupplierAddress';
        street?: string | null;
        colony?: string | null;
        municipality?: string | null;
        state?: string | null;
        country?: string | null;
        zipCode?: string | null;
        number?: {
          __typename?: 'AddressNumber';
          interior?: string | null;
          exterior?: string | null;
        } | null;
        streets?: {
          __typename?: 'AddressStreets';
          a?: string | null;
          b?: string | null;
        } | null;
      } | null;
      taxes?: {
        __typename?: 'SupplierTaxes';
        type?: SupplierTypeTaxesEnum | null;
        rfc?: string | null;
      } | null;
      productId?: Array<
        | {
            __typename?: 'PurchaseProduct';
            id: string;
            name: string;
            description?: string | null;
            brand?: string | null;
            audited: boolean;
            supplierId: { __typename?: 'PurchaseSupplier'; name: string };
            typeService: ProductTypeService;
            details: { __typename?: 'Details'; status?: boolean | null };
          }
        | {
            __typename?: 'PurchaseProductService';
            id: string;
            name: string;
            description?: string | null;
            brand?: string | null;
            audited: boolean;
            typeService?: {
              __typename?: 'ProductTypeService';
              type?: ProductTypeServiceEnum | null;
              description?: string | null;
            } | null;
            supplierId: { __typename?: 'PurchaseSupplier'; name: string };
            details: { __typename?: 'Details'; status?: boolean | null };
          }
        | null
      > | null;
      details?: {
        __typename?: 'Details';
        status?: boolean | null;
        creationDate?: string | null;
        creatorUserId?: { __typename?: 'User'; name: string } | null;
      } | null;
    } | null;
  } | null;
};

export type GetProductQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;

export type GetProductQuery = {
  __typename?: 'Query';
  product?: {
    __typename?: 'PurchaseProductResult';
    status: boolean;
    message: string;
    product?:
      | {
          __typename?: 'PurchaseProduct';
          id: string;
          name: string;
          description?: string | null;
          brand?: string | null;
          audited: boolean;
          supplierId: {
            __typename?: 'PurchaseSupplier';
            id: string;
            name: string;
            logo?: string | null;
            deliveryTime?: number | null;
            passed?: boolean | null;
            classification?: SupplierClassificationEnum | null;
            infoContact?: {
              __typename?: 'SupplierContact';
              email?: string | null;
              phone?: string | null;
              web?: string | null;
              personalizedContact?: {
                __typename?: 'ContactPersonalized';
                name?: string | null;
                email?: string | null;
                phone?: string | null;
              } | null;
            } | null;
            address?: {
              __typename?: 'SupplierAddress';
              street?: string | null;
              colony?: string | null;
              municipality?: string | null;
              state?: string | null;
              country?: string | null;
              zipCode?: string | null;
              number?: {
                __typename?: 'AddressNumber';
                interior?: string | null;
                exterior?: string | null;
              } | null;
              streets?: {
                __typename?: 'AddressStreets';
                a?: string | null;
                b?: string | null;
              } | null;
            } | null;
            taxes?: {
              __typename?: 'SupplierTaxes';
              type?: SupplierTypeTaxesEnum | null;
              rfc?: string | null;
            } | null;
            productId?: Array<
              | {
                  __typename?: 'PurchaseProduct';
                  id: string;
                  name: string;
                  description?: string | null;
                  brand?: string | null;
                  audited: boolean;
                  supplierId: { __typename?: 'PurchaseSupplier'; name: string };
                  details: { __typename?: 'Details'; status?: boolean | null };
                }
              | {
                  __typename?: 'PurchaseProductService';
                  id: string;
                  name: string;
                  description?: string | null;
                  brand?: string | null;
                  audited: boolean;
                  typeService?: {
                    __typename?: 'ProductTypeService';
                    type?: ProductTypeServiceEnum | null;
                    description?: string | null;
                  } | null;
                  supplierId: { __typename?: 'PurchaseSupplier'; name: string };
                  details: { __typename?: 'Details'; status?: boolean | null };
                }
              | null
            > | null;
            details?: {
              __typename?: 'Details';
              status?: boolean | null;
              creationDate?: string | null;
              creatorUserId?: { __typename?: 'User'; name: string } | null;
            } | null;
          };
          details: {
            __typename?: 'Details';
            status?: boolean | null;
            creationDate?: string | null;
            creatorUserId?: { __typename?: 'User'; name: string } | null;
          };
        }
      | {
          __typename?: 'PurchaseProductService';
          id: string;
          name: string;
          description?: string | null;
          brand?: string | null;
          audited: boolean;
          typeService?: {
            __typename?: 'ProductTypeService';
            type?: ProductTypeServiceEnum | null;
            description?: string | null;
          } | null;
          supplierId: {
            __typename?: 'PurchaseSupplier';
            id: string;
            name: string;
            logo?: string | null;
            deliveryTime?: number | null;
            passed?: boolean | null;
            classification?: SupplierClassificationEnum | null;
            infoContact?: {
              __typename?: 'SupplierContact';
              email?: string | null;
              phone?: string | null;
              web?: string | null;
              personalizedContact?: {
                __typename?: 'ContactPersonalized';
                name?: string | null;
                email?: string | null;
                phone?: string | null;
              } | null;
            } | null;
            address?: {
              __typename?: 'SupplierAddress';
              street?: string | null;
              colony?: string | null;
              municipality?: string | null;
              state?: string | null;
              country?: string | null;
              zipCode?: string | null;
              number?: {
                __typename?: 'AddressNumber';
                interior?: string | null;
                exterior?: string | null;
              } | null;
              streets?: {
                __typename?: 'AddressStreets';
                a?: string | null;
                b?: string | null;
              } | null;
            } | null;
            taxes?: {
              __typename?: 'SupplierTaxes';
              type?: SupplierTypeTaxesEnum | null;
              rfc?: string | null;
            } | null;
            productId?: Array<
              | {
                  __typename?: 'PurchaseProduct';
                  id: string;
                  name: string;
                  description?: string | null;
                  brand?: string | null;
                  audited: boolean;
                  supplierId: { __typename?: 'PurchaseSupplier'; name: string };
                  details: { __typename?: 'Details'; status?: boolean | null };
                }
              | {
                  __typename?: 'PurchaseProductService';
                  id: string;
                  name: string;
                  description?: string | null;
                  brand?: string | null;
                  audited: boolean;
                  typeService?: {
                    __typename?: 'ProductTypeService';
                    type?: ProductTypeServiceEnum | null;
                    description?: string | null;
                  } | null;
                  supplierId: { __typename?: 'PurchaseSupplier'; name: string };
                  details: { __typename?: 'Details'; status?: boolean | null };
                }
              | null
            > | null;
            details?: {
              __typename?: 'Details';
              status?: boolean | null;
              creationDate?: string | null;
              creatorUserId?: { __typename?: 'User'; name: string } | null;
            } | null;
          };
          details: {
            __typename?: 'Details';
            status?: boolean | null;
            creationDate?: string | null;
            creatorUserId?: { __typename?: 'User'; name: string } | null;
          };
        }
      | null;
  } | null;
};

export const PurchaseSupplierFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PurchaseSupplierFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PurchaseSupplier' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logo' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'infoContact' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                { kind: 'Field', name: { kind: 'Name', value: 'web' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'personalizedContact' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'number' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'interior' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'exterior' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'colony' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'municipality' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'streets' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'a' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'b' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'taxes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rfc' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'deliveryTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'passed' } },
          { kind: 'Field', name: { kind: 'Name', value: 'classification' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PurchaseProduct' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'brand' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'audited' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'supplierId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'details' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PurchaseProductService' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'typeService' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'brand' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'audited' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'supplierId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'details' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'details' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorUserId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creationDate' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PurchaseSupplierFragmentFragment, unknown>;
export const UserLoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'userLogin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'password' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const GetUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUsers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'users' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastname' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'password' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'birthday' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastSession' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetPurchaseSuppliersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPurchaseSuppliers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'suppliers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'suppliers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PurchaseSupplierFragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PurchaseSupplierFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  GetPurchaseSuppliersQuery,
  GetPurchaseSuppliersQueryVariables
>;
export const GetPurchaseProductsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPurchaseProducts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'products' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'products' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'PurchaseProduct' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'brand' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'audited' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'supplierId' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'details' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'status' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: {
                            kind: 'Name',
                            value: 'PurchaseProductService',
                          },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'typeService' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'description',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'brand' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'audited' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'supplierId' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'details' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'status' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPurchaseProductsQuery,
  GetPurchaseProductsQueryVariables
>;
export const GetSupplierDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSupplier' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'supplierId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'supplier' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'supplierId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'supplier' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PurchaseSupplierFragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PurchaseSupplierFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<GetSupplierQuery, GetSupplierQueryVariables>;
export const GetProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'productId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'PurchaseProduct' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'brand' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'audited' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'supplierId' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'PurchaseSupplierFragment',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'details' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'status' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'creatorUserId',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'creationDate',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: {
                            kind: 'Name',
                            value: 'PurchaseProductService',
                          },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'typeService' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'description',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'brand' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'audited' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'supplierId' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'PurchaseSupplierFragment',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'details' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'status' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'creatorUserId',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'creationDate',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PurchaseSupplierFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
