---
prev: false
next: false
outline: deep
---

# Statistics

This page provides some basic knowledge required in statistics for Machine Learning.

## Summary Statistics

Depending on whether the data is [categorical](/machine-learning/concepts#types-of-data) or [numerical](/machine-learning/concepts#types-of-data), you may have different measures of statistics for each.

### Categorical

- **Frequencies** of different classes.
- **Mode**: category that occurs most often.
- **Quantiles**: categories that occur more than `t` times.

### Continuous

Measures of **location** for continuous features:
- **Mean**: average value.
- **Median**: value such that half points are larger/smaller.
- **Quantiles**: value such that `k` fraction of points are larger.

Measures of **spread** for continuous features:
- **Range**: minimum and maximum values.
- **Variance**: measure of how far values are from the mean.
- **Standard Deviation (SD)**: the square root of the variance.
- **Intequantile ranges**: difference between quantiles.

## Entropy

A measurement for the "**randomness**" of a set of variables.

For a categorical variable that can take `k` values, entropy is defined by:
$$
\text{entropy} = -\sum^{k}_{c=1}p_c\log{p_c}
$$