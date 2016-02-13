//Dev note: adding event tracking for Google Analytics with jQuery
//https://developers.google.com/analytics/devguides/collection/analyticsjs/events


//INDEX PAGE
// Track primary link to 1st casestudy
$('#link-casestudyOne’).on('click', function() {
  ga('send', 'event', ‘link’, 'click', ‘recently-casestudy-1’);
});

// Track primary link to 2nd casestudy
$('#link-casestudyTwo’).on('click', function() {
  ga('send', 'event', ‘link’, 'click', ‘recently-casestudy-2’);
});

// Track primary link to 3rd casestudy
$('#link-casestudyThree’).on('click', function() {
  ga('send', 'event', ‘link’, 'click', ‘recently-casestudy-3’);
});

// Track external link to metfilmschool.co.uk
$('#link-metfilmschool’).on('click', function() {
  ga('send', 'event', ‘link’, 'click', ‘user-visits-metfilmschool’);
});