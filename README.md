healthplatform-web-frontend
===========================
[![License](https://img.shields.io/badge/license-Apache--2.0%20OR%20MIT-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://travis-ci.org/offscale/healthplatform-web-frontend.svg?branch=master)](https://travis-ci.org/offscale/healthplatform-web-frontend)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/offscale/healthplatform-web-frontend.svg)](https://libraries.io/github/offscale/healthplatform-web-frontend)

System for doctors to triage patient images.

## Update version

    sed -i "/this.serverStatus =/c\    this.serverStatus = { version: '@ $(jq -r .version package.json); '};" src/app/server-status/server-status.component.ts

## Deploy distribution
Clone [healthplatform-web-frontend-dist](https://github.com/offscale/healthplatform-web-frontend-dist) one directory above, then:

    rm -rf dist; ng build --prod && d=../healthplatform-web-frontend-dist && rm -rf "$d/dist" && mv "$PWD/dist/${PWD##*/}/" "$d/dist" && cd "$d" && (git add .; git status) || ( >&2 echo BUILD FAILED )

## Configure a reverse proxy for server

Use a long [nginxctl](https://github.com/offscale/nginxctl) CLI command to create an nginx config and server it:

    python -m nginxctl serve --temp_dir '/tmp' -b 'server' --server_name 'localhost' --listen '8080' -b 'location' '/api' --proxy_pass 'http://localhost:3000' --proxy_redirect 'off' -} -b 'location' '/fundus_images' --root 'PATH_CONTAINING_FUNDUS_IMAGES' -} -b 'location' '/' --root '/tmp/wwwroot' --try_files '$uri$args $uri$args/ /index.html' -} -}

Or just write a config (below is what the command generates… with some newlines thrown in):

```nginx
server {
    server_name localhost;
    listen 8080;

    location /api {
        proxy_pass http://localhost:3000;
        proxy_redirect off;
    }

    location /fundus_images {
        root PATH_CONTAINING_FUNDUS_IMAGES;
    }

    location / {
        root /tmp/wwwroot;
        try_files $uri$args $uri$args/ /index.html;
    }
}
```

For development server, run with:

    python -m nginxctl serve --temp_dir '/tmp' -b map '$http_upgrade $connection_upgrade' --default 'upgrade' --"''" close -} -b 'server' --server_name 'localhost' --listen '8080' -b 'location' '/api' --proxy_pass 'http://localhost:3000' --proxy_redirect 'off' -} -b 'location' '^~ /sockjs-node/' --proxy_pass 'http://127.0.0.1:4200' --proxy_set_header 'Upgrade $http_upgrade' --proxy_set_header 'Connection $connection_upgrade' --proxy_set_header 'Host $host' --proxy_http_version '1.1' --proxy_cache_bypass '$http_upgrade' -} -b 'location' '/fundus_images' --root 'PATH_CONTAINING_FUNDUS_IMAGES' -}  -b 'location' '/' --proxy_pass 'http://127.0.0.1:4200/' --proxy_set_header 'Upgrade $http_upgrade' --proxy_set_header 'Connection $connection_upgrade' --proxy_set_header 'Host $host' --proxy_http_version '1.1' --proxy_cache_bypass '$http_upgrade' -} -}

Or just write a config (below is what the command generates… with some newlines thrown in):

```nginx
map $http_upgrade $connection_upgrade {
    default upgrade;
    "''" close;
}

server {
    server_name localhost;
    listen 8080;

    location /api {
        proxy_pass http://localhost:3000;
        proxy_redirect off;
    }

    location ^~ /sockjs-node/ {
        proxy_pass http://127.0.0.1:4200;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_cache_bypass $http_upgrade;
    }

    location /fundus_images {
        root PATH_CONTAINING_FUNDUS_IMAGES;
    }

    location / {
        proxy_pass http://127.0.0.1:4200/;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

## License

Licensed under any of:

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or <https://www.apache.org/licenses/LICENSE-2.0>)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or <https://opensource.org/licenses/MIT>)
- CC0 license ([LICENSE-CC0](LICENSE-CC0) or <https://creativecommons.org/publicdomain/zero/1.0/legalcode>)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
licensed as above, without any additional terms or conditions.
