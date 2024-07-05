---
# prev: false
# next: false
outline: deep
---

# Statistics

This page provides some basic knowledge required in statistics for Machine Learning.

## Summary Statistics

Depending on whether the data is [categorical](/machine-learning/concepts#types-of-data) or [numerical](/machine-learning/concepts#types-of-data), you may have different measures of statistics for each.

### Categorical

- **Frequencies** of different classes.
- **Mode**: category that occurs most often.
- **Quantiles**: categories that occur more than $t$ times.

### Continuous

Measures of **location** for continuous features:
- **Mean**: average value.
- **Median**: value such that half points are larger/smaller.
- **Quantiles**: value such that $k$ fraction of points are larger.

Measures of **spread** for continuous features:
- **Range**: minimum and maximum values.
- **Variance**: measure of how far values are from the mean.
- **Standard Deviation (SD)**: the square root of the variance.
- **Intequantile ranges**: difference between quantiles.

## Entropy

A measurement for the "**randomness**" of a set of variables.

- **Low entropy** means "very predictable"
- **High entropy** means "very random"

::: details Mathematical Representation
For a categorical variable that can take $k$ values, entropy is defined by:
$$
\text{entropy} = -\sum^{k}_{c=1}p_c\log{p_c}
$$
where $p_c$ is the proportion of times you have value $c$.

- Minimum value is 0 (no randomness).
- Maximum value is $\log(k)$.
:::

- For categorical features, a **uniform distribution** has the highest entropy.
- For continuous densities with a mean and variance, the **normal distribution** has the highest entropy.

::: details Visualization of Low and High entropy
Low entropy:
![low entropy image](/machine-learning/assets/low-entropy.png)

High entropy:
![high entropy image](/machine-learning/assets/high-entropy.png)
:::

## Distance and Similarities

There are summary statistics between features of data as well.

- Hamming distance

  Number of elements in the vectors that aren't equal.

- Euclidean distance
  
  How far apart the vectors are.

- Correlation
  
  Does one increase/decrease linearly as the other increases? Measured on a scale between -1 and 1.