import { API_URL, fetchParams } from '../../config/index'
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(API_URL as string, {
    method: "POST",
    ...(fetchParams()),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID']['output'];
  price: Scalars['String']['output'];
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  message?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart?: Maybe<CartItem>;
  createTodo?: Maybe<Todo>;
  loginUser: LoginResponse;
  loginUserWithGoogle: LoginResponse;
  signUpUser: User;
};


export type MutationAddToCartArgs = {
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCreateTodoArgs = {
  addElement?: InputMaybe<TodoCreate>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginUserWithGoogleArgs = {
  googleAuthCode: Scalars['String']['input'];
};


export type MutationSignUpUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  cartItemById?: Maybe<CartItem>;
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryCartItemByIdArgs = {
  cartItemId: Scalars['ID']['input'];
};


export type QueryCartItemsArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryTodoArgs = {
  todoId: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['ID']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TodoCreate = {
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type AddToCartMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addToCart?: { __typename?: 'CartItem', id: string, productId: string, quantity: number, userId: string, title?: string | null, price: string } | null };

export type CreateTodoMutationVariables = Exact<{
  addElement?: InputMaybe<TodoCreate>;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'Todo', id?: string | null, title?: string | null, price?: string | null, description?: string | null } | null };

export type LoginUserWithGoogleMutationVariables = Exact<{
  googleAuthCode: Scalars['String']['input'];
}>;


export type LoginUserWithGoogleMutation = { __typename?: 'Mutation', loginUserWithGoogle: { __typename?: 'LoginResponse', userId?: string | null, token?: string | null, message?: string | null } };

export type LoginUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginResponse', userId?: string | null, token?: string | null, message?: string | null } };

export type SignUpUserMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'User', _id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, password?: string | null, role?: string | null, message?: string | null } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', _id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, password?: string | null, role?: string | null } | null> | null };

export type CartItemByIdQueryVariables = Exact<{
  cartItemId: Scalars['ID']['input'];
}>;


export type CartItemByIdQuery = { __typename?: 'Query', cartItemById?: { __typename?: 'CartItem', id: string, productId: string, quantity: number, userId: string, title?: string | null, price: string } | null };

export type CartItemsQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type CartItemsQuery = { __typename?: 'Query', cartItems?: Array<{ __typename?: 'CartItem', id: string, productId: string, quantity: number, userId: string, title?: string | null, price: string } | null> | null };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id?: string | null, title?: string | null, price?: string | null, description?: string | null } | null> | null };

export type UserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', _id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, password?: string | null, role?: string | null } | null };

export type TodoQueryVariables = Exact<{
  todoId: Scalars['ID']['input'];
}>;


export type TodoQuery = { __typename?: 'Query', todo?: { __typename?: 'Todo', id?: string | null, title?: string | null, price?: string | null, description?: string | null } | null };


export const AddToCartDocument = `
    mutation AddToCart($productId: ID!, $quantity: Int!) {
  addToCart(productId: $productId, quantity: $quantity) {
    id
    productId
    quantity
    userId
    title
    price
  }
}
    `;
export const useAddToCartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddToCartMutation, TError, AddToCartMutationVariables, TContext>) =>
    useMutation<AddToCartMutation, TError, AddToCartMutationVariables, TContext>(
      ['AddToCart'],
      (variables?: AddToCartMutationVariables) => fetcher<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, variables)(),
      options
    );
export const CreateTodoDocument = `
    mutation CreateTodo($addElement: TodoCreate) {
  createTodo(addElement: $addElement) {
    id
    title
    price
    description
  }
}
    `;
export const useCreateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>) =>
    useMutation<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>(
      ['CreateTodo'],
      (variables?: CreateTodoMutationVariables) => fetcher<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, variables)(),
      options
    );
export const LoginUserWithGoogleDocument = `
    mutation LoginUserWithGoogle($googleAuthCode: String!) {
  loginUserWithGoogle(googleAuthCode: $googleAuthCode) {
    userId
    token
    message
  }
}
    `;
export const useLoginUserWithGoogleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginUserWithGoogleMutation, TError, LoginUserWithGoogleMutationVariables, TContext>) =>
    useMutation<LoginUserWithGoogleMutation, TError, LoginUserWithGoogleMutationVariables, TContext>(
      ['LoginUserWithGoogle'],
      (variables?: LoginUserWithGoogleMutationVariables) => fetcher<LoginUserWithGoogleMutation, LoginUserWithGoogleMutationVariables>(LoginUserWithGoogleDocument, variables)(),
      options
    );
export const LoginUserDocument = `
    mutation LoginUser($email: String, $password: String) {
  loginUser(email: $email, password: $password) {
    userId
    token
    message
  }
}
    `;
export const useLoginUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginUserMutation, TError, LoginUserMutationVariables, TContext>) =>
    useMutation<LoginUserMutation, TError, LoginUserMutationVariables, TContext>(
      ['LoginUser'],
      (variables?: LoginUserMutationVariables) => fetcher<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, variables)(),
      options
    );
export const SignUpUserDocument = `
    mutation SignUpUser($firstName: String, $lastName: String, $email: String, $password: String, $role: String) {
  signUpUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
    role: $role
  ) {
    _id
    firstName
    lastName
    email
    password
    role
    message
  }
}
    `;
export const useSignUpUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SignUpUserMutation, TError, SignUpUserMutationVariables, TContext>) =>
    useMutation<SignUpUserMutation, TError, SignUpUserMutationVariables, TContext>(
      ['SignUpUser'],
      (variables?: SignUpUserMutationVariables) => fetcher<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, variables)(),
      options
    );
export const UsersDocument = `
    query Users {
  users {
    _id
    firstName
    lastName
    email
    password
    role
  }
}
    `;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      variables?: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) =>
    useQuery<UsersQuery, TError, TData>(
      variables === undefined ? ['Users'] : ['Users', variables],
      fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, variables),
      options
    );
export const CartItemByIdDocument = `
    query CartItemById($cartItemId: ID!) {
  cartItemById(cartItemId: $cartItemId) {
    id
    productId
    quantity
    userId
    title
    price
  }
}
    `;
export const useCartItemByIdQuery = <
      TData = CartItemByIdQuery,
      TError = unknown
    >(
      variables: CartItemByIdQueryVariables,
      options?: UseQueryOptions<CartItemByIdQuery, TError, TData>
    ) =>
    useQuery<CartItemByIdQuery, TError, TData>(
      ['CartItemById', variables],
      fetcher<CartItemByIdQuery, CartItemByIdQueryVariables>(CartItemByIdDocument, variables),
      options
    );
export const CartItemsDocument = `
    query CartItems($userId: ID!) {
  cartItems(userId: $userId) {
    id
    productId
    quantity
    userId
    title
    price
  }
}
    `;
export const useCartItemsQuery = <
      TData = CartItemsQuery,
      TError = unknown
    >(
      variables: CartItemsQueryVariables,
      options?: UseQueryOptions<CartItemsQuery, TError, TData>
    ) =>
    useQuery<CartItemsQuery, TError, TData>(
      ['CartItems', variables],
      fetcher<CartItemsQuery, CartItemsQueryVariables>(CartItemsDocument, variables),
      options
    );
export const TodosDocument = `
    query Todos {
  todos {
    id
    title
    price
    description
  }
}
    `;
export const useTodosQuery = <
      TData = TodosQuery,
      TError = unknown
    >(
      variables?: TodosQueryVariables,
      options?: UseQueryOptions<TodosQuery, TError, TData>
    ) =>
    useQuery<TodosQuery, TError, TData>(
      variables === undefined ? ['Todos'] : ['Todos', variables],
      fetcher<TodosQuery, TodosQueryVariables>(TodosDocument, variables),
      options
    );
export const UserDocument = `
    query User($userId: ID!) {
  user(userId: $userId) {
    _id
    firstName
    lastName
    email
    password
    role
  }
}
    `;
export const useUserQuery = <
      TData = UserQuery,
      TError = unknown
    >(
      variables: UserQueryVariables,
      options?: UseQueryOptions<UserQuery, TError, TData>
    ) =>
    useQuery<UserQuery, TError, TData>(
      ['User', variables],
      fetcher<UserQuery, UserQueryVariables>(UserDocument, variables),
      options
    );
export const TodoDocument = `
    query Todo($todoId: ID!) {
  todo(todoId: $todoId) {
    id
    title
    price
    description
  }
}
    `;
export const useTodoQuery = <
      TData = TodoQuery,
      TError = unknown
    >(
      variables: TodoQueryVariables,
      options?: UseQueryOptions<TodoQuery, TError, TData>
    ) =>
    useQuery<TodoQuery, TError, TData>(
      ['Todo', variables],
      fetcher<TodoQuery, TodoQueryVariables>(TodoDocument, variables),
      options
    );