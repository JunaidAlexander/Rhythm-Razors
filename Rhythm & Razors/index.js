
  // An array of video URLs
  const videoUrls = [
    'videos/production_id_4631354 (1080p).mp4',
   
    // Add more video URLs here
  ];

  // Function to generate video sections dynamically
  function generateVideoSections() {
    const videoRow = document.getElementById('video-row');

    for (const videoUrl of videoUrls) {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-md-4', 'mb-4');

      const videoSection = document.createElement('div');
      videoSection.classList.add('video-item', 'embed-responsive', 'embed-responsive-16by9');

      const videoIframe = document.createElement('iframe');
      videoIframe.classList.add('embed-responsive-item');
      videoIframe.src = videoUrl;
      videoIframe.allowfullscreen = true;

      videoSection.appendChild(videoIframe);
      colDiv.appendChild(videoSection);
      videoRow.appendChild(colDiv);
    }
  }

  // Call the function to generate video sections
  generateVideoSections();

