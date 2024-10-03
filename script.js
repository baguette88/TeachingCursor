document.addEventListener('DOMContentLoaded', function() {
    fetch('README.md')
        .then(response => response.text())
        .then(markdown => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            console.error('Error fetching README.md:', error);
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
});