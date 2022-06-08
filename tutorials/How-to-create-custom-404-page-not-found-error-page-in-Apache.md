---
layout: bloglayout.njk
tags: tutorial
pageTitle: How to create a custom 404 error page in Apache
intro: A 404 HTTP error message displays to customers of your website if they
  follow a broken or dead link.
---
A 404 HTTP error message displays to customers of your website if they follow a broken or dead link. If your website runs on an Apache web server, here’s how to create a custom, user-friendly page that will help your customers find the page they were looking for:

## 1. Create your custom page not found page

Create a basic html file called notfound.html. It should look something like this:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div>TODO write content</div>
    </body>
</html>
```

The title and level one heading of your page should clearly state the reason why the customer has ended up on that page:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>404 error: page cannot be found</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>404 error: page cannot be found</h1>
    </body>
</html>
```