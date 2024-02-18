package middleware

import (
	"net/http"

	"github.com/makeok/go-web-init/pkg/common"
	"github.com/makeok/go-web-init/pkg/utils/ratelimit"

	"github.com/gin-gonic/gin"
)

func RateLimitMiddleware(configs []ratelimit.LimitConfig) (gin.HandlerFunc, error) {
	var limiters []*ratelimit.RateLimiter
	for i := range configs {
		limiter, err := ratelimit.NewRateLimiter(&configs[i])
		if err != nil {
			return nil, err
		}
		limiters = append(limiters, limiter)
	}

	return func(c *gin.Context) {
		for _, limiter := range limiters {
			if err := limiter.Accept(c); err != nil {
				common.ResponseFailed(c, http.StatusTooManyRequests, err)
				return
			}
		}

		c.Next()
	}, nil
}
