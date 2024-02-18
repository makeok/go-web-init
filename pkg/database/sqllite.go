package database

import (
	"github.com/makeok/go-web-init/pkg/config"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func NewSqlite(conf *config.DBConfig) (*gorm.DB, error) {
	return gorm.Open(sqlite.Open(conf.File), &gorm.Config{})
}
