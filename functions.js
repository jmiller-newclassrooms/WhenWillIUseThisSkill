// JavaScript function to disable feedback buttons for the specific use case
function disableFeedbackButtons(clickedButton) {
    // Find the parent use-case div containing the clicked button
    var useCaseDiv = clickedButton.closest('.use-case');
    
    // Find all buttons within the specific use-case div
    var feedbackButtons = useCaseDiv.querySelectorAll('.feedback-buttons button');
    
    // Loop through all buttons in the specific use case
    for (var i = 0; i < feedbackButtons.length; i++) {
        feedbackButtons[i].disabled = true; // Disable all buttons in the specific use case
    }
    
    // Enable the clicked button
    clickedButton.disabled = false;
}

function pushReactionInfoToDataLayer(clickedButton) {
    const urlParams = new URLSearchParams(window.location.search);
    var useCaseDiv = clickedButton.closest('.use-case');
    window.dataLayer = window.dataLayer || [];
        dataLayer.push({'event': 'reaction', 'user': urlParams.get('student'), 'skill': urlParams.get('skill'), 'useCase': useCaseDiv.children[0].innerText, 'reaction': clickedButton.className}); 
}
