package main

import (
	"flag"
	"os"
	"embed"

	"github.com/makeok/go-web-init/pkg/config"
	"github.com/makeok/go-web-init/pkg/server"
	"github.com/makeok/go-web-init/pkg/version"

	"github.com/sirupsen/logrus"
)

var (
	printVersion = flag.Bool("v", false, "print version")
	appConfig    = flag.String("config", "config/app.yaml", "application config path")
)

// ！！重要 必须使用*，否则_和.开头的文件不会被打包进去
//go:embed dist/* 
var dist embed.FS

// @title           Weave Server API
// @version         2.0
// @description     This is a weave server api doc.

// @license.name  Apache 2.0
// @license.url   http://www.apache.org/licenses/LICENSE-2.0.html

// @host      localhost:8080
// @BasePath  /

// @securityDefinitions.apikey JWT
// @in header
// @name Authorization
func main() {
	flag.Parse()

	if *printVersion {
		version.Print()
		os.Exit(0)
	}

	logger := logrus.StandardLogger()
	logger.SetFormatter(&logrus.JSONFormatter{})

	conf, err := config.Parse(*appConfig)
	if err != nil {
		logger.Fatalf("Failed to parse config: %v", err)
	}

	server.SetDist(dist);
	s, err := server.New(conf, logger)
	if err != nil {
		logger.Fatalf("Init server failed: %v", err)
	}

	if err := s.Run(); err != nil {
		logger.Fatalf("Run server failed: %v", err)
	}
}
