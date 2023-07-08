# A GUI for FCL-LM
FCL-GUI is a GUI written in Typescript (using the SvelteKit framework) for FCL-LM.

## Running with docker-compose
```yaml
version: "3"
services:
  fcl-gui:
    image: ghcr.io/fcl-lm/fcl-gui:main
    ports:
      - 3000:3000
    environment:
      PUBLIC_FLASK_ENDPOINT: http://localhost:5000
        
```

## Development

To start a development server:

```bash
npm run dev

# Or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

Then:

```bash
node build
```
