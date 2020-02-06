# homework5
This calendar application allows the users to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.
The app displays the current day and the standard business hours (9AM to 5PM). Each time slot represents one hour and contain the field to hold user input, a save button, and a delete button.
The color of each hour will change to reflect whether the time slot is in the past(light gray), the present(red), or the future(green). This will change depending on the time of day.
Clicking on the save button will store the time and user input in localstorage, so that when the page is refreshed, the user input is still on the page.
Clicking on the delete button will clear the input field and also remove it from the localstorage.