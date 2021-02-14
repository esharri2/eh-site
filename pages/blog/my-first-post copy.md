---
title: How to create accessible and reusable tooltips components test tet test lfdjadflk
date: 2010-11-01
description: This is the first post.
permalink: false
---

## Example: Paragraphs

Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Maecenas nec odio et ante tincidunt tempus. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.

Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.

Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.


## Example: Headings

## Heading level 2
### Heading level 3
#### Heading level 4


## Example: Horizontal Rule

***

## Example: Emphasis

**This is bold text**


*This is italic text*


~~Strikethrough~~


## Example: Blockquotes

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
>
> John Doe, 1997

## Example: Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

## Code

``` js
const test = () => {
  alert("test!");
}
console.log('what up');
```