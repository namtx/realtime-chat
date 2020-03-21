## How to run up project

```bash
# go to frontend directory
cd src/frontend
# install packages
yarn
# parcel build
parcel build index.html

# after build frontend, you will have to run up http server
cd ../backend
go run main.go
```

## How to test

Just go `http://localhost:8080`

## Notes
### Websocket
Initialize the websocket

```javascript
var ws = new Websocket("ws://example.com/ws")
```

The request is actually an HTTP request initially but we use `ws://` or `wss://` for secure connection

The server will then `Upgrade` the connetion to a persistent two-way connection between the client and server


### Websocket with Go
Websocket is not included as part of the Go standard library

```bash
$ go get github.com/gorilla/websocket
```
