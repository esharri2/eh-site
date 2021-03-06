---
title: How to create an accessible and reusable tooltip
date: 2018-01-02
description: It's a challenge to create a tooltip component that is accessible for all users and easily reused by developers. Here is a guide for how to get it done with HTML, CSS, and JavaScript.
permalink: false
---

If you do any research on tooltips, you'll quickly learn than "tooltip" is an umbrella term. Tooltips may all share some visual similarities, but they can have really different purposes. Sarah Higley in  [Tooltips in the time of WCAG 2.1](https://sarahmhigley.com/writing/tooltips-in-wcag-21/) and Heydon Pickering in [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) both provide excellent overviews these differences (maybe go check those out and come back).

I like to boil it down to two main categories:
1. The tooltip as a visually hidden label for a control
2. The tooltip as means of providing supplemtary information 

For this post, I'm going to focus on #2. Pickering, in the aformentioned article, calls these "toggletips" and defines them as follows: 
> Toggletips exist to reveal information balloons, and serve no other purpose.

I've come across some pure-CSS tooltips that just use a hover effect on the control to display the bubble. While the simplicity of this approach is attractive, it is *really* inadequate and useless for a lot of people. We'll need some JavaScript to do it right. To see why, let's list some requirements for our tooltip:

1. The bubble will display on hover
1. The bubble will display when the control is triggered (i.e. clicked, tapped, or Enter key press)
1. The bubble will close when we click outside of it.
1. The bubble will not out of the left or right side of the viewport.
1. The information will be easily accessed by screen reader users.

## Let's start with HTML

```html
<span class="Toggletip">
  <button 
    class="Toggletip__Control"
    aria-label="More info" 
    data-toggletip-content="Here is some additional information!">
      <span aria-hidden="true">i</span>
  </button>
  <span role="status">
    <span class="Toggletip__Bubble hidden"></span>
  </span>
</span>
```


