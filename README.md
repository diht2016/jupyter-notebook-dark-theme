# Jupyter Notebook Dark theme
Simple dark theme for Jupyter Notebook. Easy to install - just one file to change.

It looks almost like a default theme - but it is dark!

## How to install
Just put the `custom.css` in this place on your device:
```
~/.jupyter/custom/custom.css
```
Or sometimes this place is here:
```
~/.ipython/profile_default/static/custom/custom.css
```
(`~` = User home folder, replace it with `%userprofile%` on Windows)

Done! Now Jupyter Notebook GUI is dark!
Then just reload pages in browser if Jupyter Notebook is running.

Also you can put `custom.js` in the same folder to be able to disable image filter (see below).

## Screenshots
<img src="https://i.imgur.com/xAU5Pvc.png">
<img src="https://i.imgur.com/B1RNZMu.png">

A filter is applied to all images, inverting their brightness (hue and saturation remain the same). So plots are dark-themed too. However, you can `Alt+Click` on an image to toggle its filter.
<img src="https://i.imgur.com/HbY1K3P.png">

## How does it work
Jupyter Notebook simply gives an ability to apply any custom CSS & JS by creating files. These files are `custom.css` and `custom.js` in special directory mentioned above.

That's all! No plugins, no addons, no creepy packages are required to install.

## How to reset back to light theme
Just replace the `custom.css` on your device with an empty file, that's all.

## Some background
I didn't made this from a scratch. The base CSS was taken from [this repo](https://github.com/powerpak/jupyter-dark-theme/) (look in `custom.css` for credits). Since then, I fixed lots of still-light-themed elements and things I didn't like (like, red headers and a completely disabled toolbar).