# Auth0LoginSignup
Demonstrates the integration of Auth0 as an identity manager in an Angular application.

## Getting Started
### [`Configs`](./src/environments//environment.dev.ts)
Update all auth configurations in the development environment file.

### Development
To run this app using Development configurations, execute the following: `ng serve --configuration=development --open`. You can test the ability for resources to be guarded by authentication by navigating to the following URL: `http://localhost:4200/resource`.

## Implementation Notes
Various resources were used to create the final product of this demonstration. No one source was used entirely to implement it.

1. [`Auth0 Tutorial`](https://auth0.com/docs/quickstart/spa/angular/01-login)
    a. Follow this tutorial only to "Install the Auth0 Angular SDK" section