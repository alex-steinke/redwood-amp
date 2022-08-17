import type { Prisma } from '@prisma/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigInt: number
  Date: string
  DateTime: string
  JSON: Prisma.JsonValue
  JSONObject: Prisma.JsonObject
  Time: string
}

export type CreatePostInput = {
  body: Scalars['String']
  title: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createPost: Post
  deletePost: Post
  updatePost: Post
}

export type MutationcreatePostArgs = {
  input: CreatePostInput
}

export type MutationdeletePostArgs = {
  id: Scalars['Int']
}

export type MutationupdatePostArgs = {
  id: Scalars['Int']
  input: UpdatePostInput
}

export type Post = {
  __typename?: 'Post'
  body: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  title: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  post?: Maybe<Post>
  posts: Array<Post>
  redwood?: Maybe<Redwood>
}

export type QuerypostArgs = {
  id: Scalars['Int']
}

export type Redwood = {
  __typename?: 'Redwood'
  currentUser?: Maybe<Scalars['JSON']>
  prismaVersion?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type FindArticleQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type FindArticleQuery = {
  __typename?: 'Query'
  article?: {
    __typename?: 'Post'
    id: number
    title: string
    body: string
    createdAt: string
  } | null
}

export type ArticlesQueryVariables = Exact<{ [key: string]: never }>

export type ArticlesQuery = {
  __typename?: 'Query'
  articles: Array<{
    __typename?: 'Post'
    id: number
    title: string
    body: string
    createdAt: string
  }>
}

export type EditPostByIdVariables = Exact<{
  id: Scalars['Int']
}>

export type EditPostById = {
  __typename?: 'Query'
  post?: {
    __typename?: 'Post'
    id: number
    title: string
    body: string
    createdAt: string
  } | null
}

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int']
  input: UpdatePostInput
}>

export type UpdatePostMutation = {
  __typename?: 'Mutation'
  updatePost: {
    __typename?: 'Post'
    id: number
    title: string
    body: string
    createdAt: string
  }
}

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput
}>

export type CreatePostMutation = {
  __typename?: 'Mutation'
  createPost: { __typename?: 'Post'; id: number }
}

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int']
}>

export type DeletePostMutation = {
  __typename?: 'Mutation'
  deletePost: { __typename?: 'Post'; id: number }
}

export type FindPostByIdVariables = Exact<{
  id: Scalars['Int']
}>

export type FindPostById = {
  __typename?: 'Query'
  post?: {
    __typename?: 'Post'
    id: number
    title: string
    body: string
    createdAt: string
  } | null
}

export type FindPostsVariables = Exact<{ [key: string]: never }>

export type FindPosts = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'Post'
    id: number
    title: string
    body: string
    createdAt: string
  }>
}
