# Landing Page - Cake Store

[DEMO](https://daph3105.github.io/landing-page/dist/index.html)

```npm command
$ npm run dev
runs the project at http://localhost:8080/
```

## Description ##
Cake Store Landing Page responsive design using CSS media queries, responding to mobile, small, and medium screen sizes.</br>
Site content:
- Header: logo and date.
- Session 1: headline, sub headline, contact us button linking to session 4, hero image.
- Session 2: 50 word paragraph and bullet list.
- Session 3: photo gallery.
- Session 4: contact form.

## JavaScript ##
- Clicking on the site logo randomly changes the text headline to one of the 4 headlines saved in an array.
- The date on the header always displays the 26th of the previous month based on today's date.
- The paragraph under "Services" can be replaced by a URL query parameter using var=text 
```
Example:
http://localhost:8080/?text=I%20love%20cake%20and%20this%20site%20makes%20me%20hungry
```
- Form Contact Us button calls .submit() method and quickly shows a success message before page refresh.

