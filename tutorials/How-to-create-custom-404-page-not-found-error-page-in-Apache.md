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

It’s also a good idea to explain what happened and why:

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
<h2>What happened?</h2><p>The page you requested cannot be found.</p><h2>Why did this happen?</h2><p>You may have accidentally typed in an incorrect URL (address) or the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    </body>
</html>
```

## 2. Upload the notfound.html to the main directory of your website

You can use an FTP program such as FileZilla to do this.

## 3. Create a file called .htaccess

Add the line `ErrorDocument 404 /notfound.html` to this file and save it as ‘.htaccess’; not ‘.htaccess.txt’ or ‘blahblah.htaccess’. .htaccess is the file extension. It should look like this:

```shell
ErrorDocument 401 /notauthorised.html
```

## 4. Upload the .htaccess file to main directory of your website

Again, you can use an FTP program such as FileZilla to do this.