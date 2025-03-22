function showContent(topic) {
    // Hide all topics
    let topics = document.querySelectorAll('.content-section');
    topics.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the selected topic
    let selectedTopic = document.getElementById(topic);
    if (selectedTopic) {
        selectedTopic.style.display = 'block';
    }
}
