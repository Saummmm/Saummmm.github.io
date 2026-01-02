---
title: Computer Vision 3D Reconstruction
year: 2025
area: CV
status: Complete
description: Implemented 3D image reconstruction give two pictures using Stereo Matching in python.
modal:
  problem: Currently, calibrated image stereo matching has not been solved yet. And implementing this will take much effort
  approach: Using Python, an interface was created to supply images into the system. Then from there, the image cameras were calibrated, disparity was mapped, and then pixels between two images were matched. Following these steps, 3D reconstruction was done to create a 3D point cloud of pixels.
  results: 3D reconstruction is visible on some of the objects.
  limitations: Not all images are able to be reconstructed, some of the matrices do not calculate accurately.
  future steps: Develop further, I mean, 3D reconstruction of uncalibrated images is not fully researched and possible yet.
links:
  - label: GitHub
    href: https://github.com/YOUR_GITHUB_USERNAME/bert-email
---
