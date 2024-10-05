# 3D4E Website
Main website code for 3D4E Website

## Directories and Codebase
* index.html: The HTML document that contains everything for the website
* 3d4e.css: CSS File for all the stylized features for index.html
* shop.html/shop.css: Some code I originally wrote for the e-Shop but I doubt we need to use that anymore
* models/: A set of .obj files that was originally used for rendering meshes using three.js (not used anymore but worth experimenting)
* tutorials/: Old directory from old website to show PDFs of old tutorials for old workshops
* products/: Bunch of HTML files for e-Shop interface
* layouts/: Bunch of HTML files for e-Shop interface
* js/: Old website JS files (can probably delete)
* JS/: Current website JS files
    * buttonfunc.js: All the event listeners for most/all the buttons
    * menu.js: Animation stuff for the menu (I think)
    * MorphSVGPlugin.min.js: Animation library (currently unused)
    * TweenMax.min.js: Animation Library (currently in use)
    * objloader.js: Used to display obj files with three.js (currently unused)
* img/: All the images for board/projects/etc (NOTE: All the events/retreat pictures are on Google Photos (see index.html))
* BG/: All the images for background parallax stuff

## For Animating SVGs with Greensock
1. Import SVG to HTML Inline using https://jakearchibald.github.io/svgomg/
2. Use Greensock: https://greensock.com/docs/v3/GSAP/Tween
3. Collapse all inline SVG code (probably don't want to see it)

## For Website Updates
1. Everything is in index.html
2. Search through index.html for the comments beginning with "FOR WEBMASTER" for all the places to change/update

## For Adding Google Image Albums/Gallery to Website (Probably not the best way of doing this...)
1. Upload all the images to a Google Gallery Album
2. Make sure the Gallery is accessible through shareable link
3. Use https://www.publicalbum.org/blog/embedding-google-photos-albums
4. Make new button and div in index.html with user-defined id
5. Make new event listener with buttonfunc.js and paste inline