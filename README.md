# NgUniversalDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0-rc.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any
of the source files.

## What & Why?

Possible Disadvantages

* No / bad SEO - Because crawlers see an empty page
* Slow page load - Because JavaScript must be executed first

Angular Universal

First page get pre-rendered on the server -> Thereafter, it's still a SPA

## Angular Universal & Angular 17

Convert an existing Angular app to an Angular Universal app by running `ng add @nguniversal/express-engine`.

This command is still the command you should use, if you're working on a project that uses Angular 16 or older.

If you are working on an Angular 17 project, the correct command to run would be `ng add @angular/ssr`.

In general, with Angular 17, "Angular Universal" was pretty much renamed to "Angular SSR" (SSR stands for Server-side Rendering).

The idea is the same though => The Angular appp is pre-rendered on the server and the finished HTML code is sent to the client. Thereafter, it becomes a client-side SPA again.

### Creating Angular SSR Apps with Angular 17+

If you want to create a new Angular project that comes with Universal/SSR enabled out of the box, you can run `ng new <project-name> --ssr`.

### Running a SSR / Universal Project with Angular 17+

If you are using Angular 17, running a SSR-enabled project also is easier than doing so with Angular 16 or lower.

All you have o do with Angular 17, is run `ng serve`. It'll automatically use SSR if you enabled it via `ng add @angular/ssr` or `ng new <project-name> --ssr`.
