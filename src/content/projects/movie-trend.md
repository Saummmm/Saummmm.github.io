---
title: Decoding Movie Sentiment Trends
year: 2024
area: NLP, Time Series Analysis
status: Complete
description: Implemented a pipeline of sentiment analysis on movie reviews to then conduct time series analysis of sentiments over different categories of movies.
modal:
  problem: Understanding data in different ways is an important aspect of datascience. In this case, the problem I am looking to solve is understanding how popular different movie genres are over the years. Sometimes we can see a cyclical pattern from these trends.
  approach: On a dataset of over 4 million reviews on different movies over the years 1950 to 2011. Created one pipeline for preprocessing data using a pretrained RoBERTa model to classify between positive, neutral and negative sentiments. This became another feature in our data adding up either +1 for positive sentiment and -1 for negative sentiment. From there each genre of movie for each year, the total sentiments were added up. Then, on this new found data segment, an time series analysis was done using an LSTM based architecture to predict the most popular genre. A sliding window of 5 years was used to predict the next consecutive year's most popular genre of movie.
  results: The prediction of the next consecutive year's most popular movie had an accuracy of 78%. However, the RoBERTa model had a high accuracy in predicting the sentiment of each movie review.
  limitations: Limited by the number of movie genres. There was an imbalance in the number of genres, simulating this data would not be an accurate way to balance it out.  
  future steps: Perhaps taking an average, or a normalized count of the average sentiment on each movie, then an average of that of each movie genre.
links:
  - label: GitHub
    href: https://github.com/YOUR_GITHUB_USERNAME/bert-email
---
