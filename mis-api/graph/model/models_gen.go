// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type CreateUserInput struct {
	Name     string `json:"name"`
	Password string `json:"password"`
	Email    string `json:"email"`
	Role     string `json:"role"`
}

type DeleteUserResponse struct {
	DeletedUserID string `json:"deletedUserId"`
}

type Mutation struct {
}

type Query struct {
}

type UpdateUserInput struct {
	Name     string `json:"name"`
	Password string `json:"password"`
	Email    string `json:"email"`
	Role     string `json:"role"`
}

type User struct {
	ID       string `json:"_id"`
	Name     string `json:"name"`
	Password string `json:"password"`
	Email    string `json:"email"`
	Role     string `json:"role"`
}
