---
prev: false
# next: false
outline: deep
---

# Basic Concepts

Very basic concepts in Machine Learning. Heavily based on my University courses.

## Terminology

- **Examples**

  Refers to the rows of a dataset.

- **Features**

  Refers to the columns of a dataset.

## Data

### Types of Data

- **Categorical**

  Data that can be identified by names or labels. For example, gender, colors, brands, etc.

- **Numerical**

  Data that have numerical values that can be measured. For example, height, weight, kilometers per hour, etc.


### Data Cleaning

There may be reasons that the data may not be clean.
- Noise
- Outliers
- Missing values
- Duplicated data

## Features

Here are some typical ways to modify features in data.

### Aggregation

To combine features to form new features.

::: details **Example: Using Cities and Provinces in Canada**
**Before**
| VAN | BUR | SUR | EDM | CAL |
| --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 |

**After**
| BC | AB |
| --- | --- |
| 1 | 0 |
| 1 | 0 |
:::

### Transformation

**Discretization** (binning): turning numerical data into categorical

::: details **Example: Using Ages of People**
**Before**
| Age |
| --- |
| 23 |
| 23 |
| 22 |
| 25 |
| 19 |
| 22 |

**After**
| <20 | ≥20, <25 | ≥25 |
| --- | --- | --- |
| 0 | 1 | 0 |
| 0 | 1 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
:::

### Selection

To remove features that are not relevant to the task.