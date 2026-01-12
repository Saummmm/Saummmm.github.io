---
title: BERT Email Classification
year: 2023
area: NLP
status: Complete (Looking into Next Steps)
description: Fine-tuned a Transformer model for multi-class email categorization; evaluated performance and failure modes.
modal:
  problem: Classify emails into predefined categories.
  approach: Fine-tuned BERT with domain-specific preprocessing and evaluated on held-out validation data. Uses transformers, tokens and PyTorch libraries to create a pipeline for training and testing model perfomances from a selection of 7000 different emails.
  results: F1 improved over baseline; strongest gains in ambiguous classes.
  limitations: Limited by label noise and domain drift. Currently limited to the 4 different categories of email labels it was trained on.
  future-steps: Train model to accept new categories based on user preferences to add another label for the model to start classifying for. 
links:
  - label: "GitHub"
    href: "https://github.com/Saummmm/BERT-Email-Classifier"
---
