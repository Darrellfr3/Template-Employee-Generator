# Template-Employee-Generator

## Description

This application is intended to organize a company's team with simple to use features within the cli.

## Table of Contents

* [Features](#Features)
* [Links](#Links)
* [Screenshots](#Screenshots)
* [Language](#Language)
* [Code-Example](#Code-Example)
* [Reference](#Reference)
* [Tests/Issues/Notes](#Tests/Issues/Notes)
* [Contribute/Credits](#Contribute/Credits)
* [License](#License)

## Features

- [x] Has the current day displayed at the top of the calendar.
- [x] Has time blocks for standard business hours.
- [x] Each time block indicates whether it's the past, present or future.
- [x] Can edit each time block to according to what the user wants as the event.
- [x] Can save your event into the local storage.
- [x] The event will persist even when the user refreshes the page.
- [x] Will have a button that clears out your schedule.
- [] Disable buttons after it passes the current time.


## Links

* Project Repo: [Repository](https://github.com/jeishu/work-day-scheduler)
* GitHub Page: [Website](https://jeishu.github.io/work-day-scheduler/)

## Screenshots

Nothing here yet.

![Nothing Here](./assets/images/testgif.gif)


## Language

* JavaScript
* HTML
* CSS
* [jQuery](https://jquery.com/)
* [Moment.js](https://momentjs.com/)
* [Bootstrap](https://getbootstrap.com/)


## Code-Example

I used template literals to append the content from JS to HTML. A For Loop was used to create 8 of these from 9AM to 5PM.
Notice I also use ${} in the template literals to grab values from JS. And you can see Bootstrap Classes are also used within the code.
```
containerEl.append(`
        
        <div class="row time-block" data-time="${hour}">

        <!-- hours -->
            <div class="col-sm col-md-2 hour">
            <p>${moment({hour}).format("h  a")}</p>
            </div>

        <!-- schedule -->
            <div class="col-sm col-md-10 d-flex p-0 description">
            <div class="input-group">
                <textarea class="form-control text-area"></textarea>
                <div class="input-group-append">
                <button class="saveBtn d-flex justify-content-center align-items-center">
                    <i class="far fa-save fa-2x save-icon"></i>
                </button>
                </div>
            </div>
            </div>
        </div>
        `);
```

## Reference

These are websites I used to aid me in learning different syntax and different methods, functions, etc for Javascript.

> - [Developer Mozilla](https://developer.mozilla.org/en-US/) || Learn a good amount of methods and functions here.
> - [W3School](https://www.w3schools.com/) || jQuery Methods and uses were referenced here.
> - [StackOverflow](https://www.stackoverflow.com/) || Most issues I had were resolved from looking at other people's problems.
> - [HackerThemes](https://hackerthemes.com/bootstrap-cheatsheet/) || Used this as a guide for the styling on the template literal with Bootstrap Classes.
> - [Momentjscom](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/) || Used this as a guide for how moment format works
> - [CSS-Tricks](https://css-tricks.com/template-literals/) || CSSTRicks has an article on Template Literals, I used this as a guide to create my own.

These websites aid me in creating this README.

> - [GitHub Docs](https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax) || Learn most of my README syntax here.
> - [Akash Nimare](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3) || Based my README from his person.
> - [Mark Down Guide](https://www.markdownguide.org/cheat-sheet/) || README Syntax

## Tests/Issues/Notes

* Had some issues getting the colors to show present, past and future, but turns out that I forgot that future color is green. So me working at night got the color confused and spent several hours fixing something that was already working correctly
* Syntax errors again... Less code problem, more me problem. I tend to type too fast and misspell class names and or IDs. (」°ロ°)」
* Main errors is figure out how $(this) works. I was using the actual $("") selector rather than $(this). So figuring out $(this) is a life saver. Spent a good 2 days learning it.
* I utilized Bootstrap class for some CSS-ing and as well as my own CSS overriding some of it. The Bootstrap class CSS was used in the template Literals.
* I also commented out the pre-exsisting CSS and replace with my own.
* I used template literals with backticks to create and render the amount of time needed into the HTML. Each render was done with a for loop and ${} notion inside the template literals. I was very proud of this. (´ ∀ ` *) 
* Console log, console log. I console logged almost everything to check values, typeof variables, functions etc.

## Contribute/Credits

> - [html-css-js](https://html-css-js.com/css/generator/box-shadow/) || Help me generator easy box shadows.

## License

MIT © [Jeremy Zhu](https://github.com/jeishu)