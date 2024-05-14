package database

import (
	"context"
	"log"
	"time"

	"github.com/sake1/mis-api/graph/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

var connectionString string = "mongodb://localhost:27017"

type DB struct {
	client *mongo.Client
}

func Connect() *DB {
	client, err := mongo.NewClient(options.Client().ApplyURI(connectionString))
	if err != nil {
		log.Fatal(err)
	}
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatal(err)
	}

	return &DB{
		client: client,
	}
}

func (db *DB) GetUser(id string) *model.User {
	userCollec := db.client.Database("mis").Collection("user")
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	_id, _ := primitive.ObjectIDFromHex(id)
	filter := bson.M{"_id": _id}
	var user model.User
	err := userCollec.FindOne(ctx, filter).Decode(&user)
	if err != nil {
    log.Printf("abc " + id + " " )
		log.Fatal(err)
	}
	return &user
}

func (db *DB) GetUsers() []*model.User {
	userCollec := db.client.Database("mis").Collection("user")
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	var users []*model.User
	cursor, err := userCollec.Find(ctx, bson.D{})
	if err != nil {
		log.Fatal(err)
	}

	if err = cursor.All(context.TODO(), &users); err != nil {
		panic(err)
	}

	return users
}

func (db *DB) CreateUser(user model.CreateUserInput) *model.User {
	userCollec := db.client.Database("mis").Collection("user")
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	inserg, err := userCollec.InsertOne(ctx, bson.M{"name": user.Name, "email": user.Email, "password": user.Password, "role": user.Role})

	if err != nil {
		log.Fatal(err)
	}

	insertedID := inserg.InsertedID.(primitive.ObjectID).Hex()
	returnUser := model.User{ID: insertedID, Name: user.Name, Email: user.Email, Password: user.Password, Role: user.Role}
	return &returnUser
}

func (db *DB) UpdateUser(userId string, user model.UpdateUserInput) *model.User {
	userCollec := db.client.Database("mis").Collection("user")
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	updateUser := bson.M{}

	updateUser["name"] = user.Name
	updateUser["email"] = user.Email
	updateUser["role"] = user.Role

	_id, _ := primitive.ObjectIDFromHex(userId)
	filter := bson.M{"_id": _id}
	update := bson.M{"$set": updateUser}

	results := userCollec.FindOneAndUpdate(ctx, filter, update, options.FindOneAndUpdate().SetReturnDocument(1))

	var userUpdated model.User

	if err := results.Decode(&userUpdated); err != nil {
		log.Fatal(err)
	}

	return &userUpdated
}

func (db *DB) DeleteUser(userId string) *model.DeleteUserResponse {
	userCollec := db.client.Database("mis").Collection("user")
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	_id, _ := primitive.ObjectIDFromHex(userId)
	filter := bson.M{"_id": _id}
	_, err := userCollec.DeleteOne(ctx, filter)
	if err != nil {
		log.Fatal(err)
	}
	return &model.DeleteUserResponse{DeletedUserID: userId}
}
