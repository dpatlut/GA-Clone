# HTML/CSS Sprinkles 1

## Learning Objectives

Students will be able to...

1. ...identify HTML as a markup language rather than a programming language (why is it NOT a programming language?)
2. ...describe the different parts of an HTML document and what kind of content goes in each.
3. ...write a properly structured HTML document using basic tags.
4. ...explain the structure of a tag, identify attribute.

## Part One
***10 minutes***

* Instructor: Talking
* Students: Listening, participating

**What is HTML? What is class’s familiarity w/it?**

Students should know HTML stands for Hyper Text Markup Language.
HTML is a string read by your browser and displayed in your browser window. Each browser interprets markup slightly differently. For this course we will be using Chrome.

**Why is HTML not a programming language?**

HTML does not perform any logic and is used primarily for display purposes. It is a markup language and works similarly to PDFs. It has information on how to display font-sizes, backgrounds, etc.

**HTML Document Structure**

Head, body, what goes in each - draw it out on the board (everything is in boxes - box model styyyle - mention margins and padding briefly)

**What tags/parts of a HTML document do we already know?**

Write on the board, talk about what specific tags are used for.

```html
<html><body><head><title>
<div> <!-- Why is it special?? -->
<h1…><li><ul><ol><p><br><a><img>
```

## Part Two
***10 mins***

* Instructor: Demoing
* Students: Code along

1. Create a new HTML document/open it/edit it (should we have them make a folder outside of their wk01 folder for this now? Yeah probably)

2. Boilerplate! Walk through setting up HTML boilerplate by hand, automagically.

  **EMPHASIZE INDENTATION**

  ```html
  <!DOCTYPE html>

  <html>
    <head>
      <title>This is a title!</title>
    </head>
    <body>

      Hello, whirled!

    </body>
  </html>
  ```

3. Using HTML tags!

  - Create a header for your page
  - Create several subheaders
  - Create a link
  - Lorem ipsum - create paragraphs
  - Create an unordered list
  - Add li's
  - Add an image

4. Using DIVs to group related content

```html
<!DOCTYPE html>

<html>
  <head>
    <title>This is a title!</title>
  </head>
  <body>

    <h1>Hello, whirled!</h1>
    <h3>This is a subheader!</h3>

    <a href="http://www.google.com">Gooble</a>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <img src="...">

  </body>
</html>
```

## Part Three
***20 mins***

* Instructor: Hovering
* Students: Independent Work

Put together the skeleton of a blog with the tags we just played with!

Important to think about - What components is a blog made up of? Be creative!!!!!!!

MUST USE:
 - Proper HTML document boilerplate
 head, body, headers, paragraphs, divs (divide up content in a way that makes sense), ul/li’s

## Part Four
***10 mins***
* Instructor: Demoing
* Students: Watching

Review the exercise. Walk through the answer and address misconceptions, errors.
