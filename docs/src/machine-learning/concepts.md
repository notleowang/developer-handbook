---
prev: false
next: false
---

# Machine Learning Concepts

Currently, mostly comprised of concepts and topics I've learned in University.

## Terminology
- Rows are referred to as "examples".
- Columns are referred to as "features".

## Data

### Data Cleaning
Some reasons that the data may not be clean:
- Noise
- Outliers
- Missing values
- Duplicated data

## Features
Typically referred to the **columns** of a dataset.

### Feature Aggregation
- To combine features to form new features.

| VAN | BUR | SUR | EDM | CAL | &nbsp; | BC | AB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 0 | 0 | -> | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 | -> | 1 | 0 |

### Feature Transformation
- Mathematical transformation:
  - **Discretization** (binning): turning numerical data into categorical

| Age | &nbsp; | <20 | ≥20, <25 | ≥25 |
| --- | --- | --- | --- | --- |
| 23 | -> | 0 | 1 | 0 |
| 23 | -> | 0 | 1 | 0 |
| 22 | -> | 0 | 1 | 0 |
| 25 | -> | 0 | 0 | 1 |
| 19 | -> | 1 | 0 | 0 |
| 22 | -> | 0 | 1 | 0 |

### Feature Selection
- To remove features that are not relevant to the task.

## Supervised Learning